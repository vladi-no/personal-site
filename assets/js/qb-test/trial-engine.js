const delay = (duration, signal) => new Promise((resolve, reject) => {
    if (signal.aborted) {
        reject(new DOMException('The run was stopped.', 'AbortError'));
        return;
    }

    const timer = window.setTimeout(resolve, Math.max(0, duration));
    signal.addEventListener('abort', () => {
        window.clearTimeout(timer);
        reject(new DOMException('The run was stopped.', 'AbortError'));
    }, { once: true });
});

const shuffle = (items) => {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
};

export const generateTrialSequence = (config) => {
    const stimuli = [
        { shape: 'square', colorName: 'earthyOrange', color: config.colors.earthyOrange },
        { shape: 'square', colorName: 'deepSeaBlue', color: config.colors.deepSeaBlue },
        { shape: 'circle', colorName: 'earthyOrange', color: config.colors.earthyOrange },
        { shape: 'circle', colorName: 'deepSeaBlue', color: config.colors.deepSeaBlue },
    ].map((stimulus) => ({ ...stimulus, key: `${stimulus.shape}-${stimulus.colorName}` }));

    const availablePositions = Array.from({ length: config.totalTrials - 1 }, (_, index) => index + 1);
    const targetCount = Math.round(availablePositions.length * config.targetMatchRatio);
    const targetPositions = new Set(shuffle(availablePositions).slice(0, targetCount));
    const sequence = [{ ...stimuli[Math.floor(Math.random() * stimuli.length)], isMatch: false }];

    for (let index = 1; index < config.totalTrials; index += 1) {
        const previous = sequence[index - 1];
        if (targetPositions.has(index)) {
            sequence.push({ ...previous, isMatch: true });
        } else {
            const nonMatches = stimuli.filter((stimulus) => stimulus.key !== previous.key);
            sequence.push({ ...nonMatches[Math.floor(Math.random() * nonMatches.length)], isMatch: false });
        }
    }

    return sequence;
};

export class TrialEngine {
    constructor(config) {
        if (config.responseWindowMs > config.interTrialIntervalMs) {
            throw new Error('responseWindowMs must not exceed interTrialIntervalMs.');
        }
        this.config = config;
        this.listeners = new Map();
        this.state = 'IDLE';
        this.activeTrial = null;
        this.run = null;
        this.controller = null;
    }

    on(eventName, listener) {
        const listeners = this.listeners.get(eventName) || new Set();
        listeners.add(listener);
        this.listeners.set(eventName, listeners);
        return () => listeners.delete(listener);
    }

    emit(eventName, detail = {}) {
        this.listeners.get(eventName)?.forEach((listener) => listener(detail));
    }

    setState(state) {
        this.state = state;
        this.emit('statechange', { state });
    }

    canCaptureResponse() {
        return this.activeTrial !== null && (this.state === 'TRIAL_STIMULUS' || this.state === 'TRIAL_BLANK');
    }

    captureResponse(timestamp) {
        if (!this.canCaptureResponse()) return false;
        const responseTimeMs = timestamp - this.activeTrial.onsetMs;
        if (responseTimeMs < 0 || responseTimeMs > this.config.responseWindowMs) return false;
        this.activeTrial.responseTimestampsMs.push(responseTimeMs);
        this.emit('response', { trial: this.activeTrial, responseTimeMs });
        return true;
    }

    classifyTrial(trial) {
        const hasResponse = trial.responseTimestampsMs.length > 0;
        if (trial.isMatch) return hasResponse ? 'hit' : 'omission';
        return hasResponse ? 'commission' : 'correctRejection';
    }

    async start() {
        if (this.state !== 'IDLE' && this.state !== 'ABORTED' && this.state !== 'COMPLETE') return;

        this.controller = new AbortController();
        this.run = {
            startedAt: new Date().toISOString(),
            config: JSON.parse(JSON.stringify(this.config)),
            sequence: generateTrialSequence(this.config),
            trials: [],
        };

        try {
            this.setState('COUNTDOWN');
            for (let value = this.config.countdownSeconds; value > 0; value -= 1) {
                this.emit('countdown', { value });
                await delay(this.config.countdownStepMs, this.controller.signal);
            }

            for (let index = 0; index < this.run.sequence.length; index += 1) {
                const stimulus = this.run.sequence[index];
                const trial = {
                    index: index + 1,
                    shape: stimulus.shape,
                    colorName: stimulus.colorName,
                    color: stimulus.color,
                    isMatch: stimulus.isMatch,
                    onsetMs: performance.now(),
                    responseTimestampsMs: [],
                    reactionTimeMs: null,
                    classification: null,
                };
                this.activeTrial = trial;
                this.run.trials.push(trial);
                this.setState('TRIAL_STIMULUS');
                this.emit('trialstart', { trial, totalTrials: this.config.totalTrials });

                await delay(this.config.stimulusDurationMs, this.controller.signal);
                this.setState('TRIAL_BLANK');
                this.emit('trialblank', { trial });

                const remainingResponseWindow = this.config.responseWindowMs - this.config.stimulusDurationMs;
                if (remainingResponseWindow > 0) await delay(remainingResponseWindow, this.controller.signal);

                trial.classification = this.classifyTrial(trial);
                trial.reactionTimeMs = trial.classification === 'hit' ? trial.responseTimestampsMs[0] : null;
                this.activeTrial = null;
                this.emit('trialcomplete', { trial });

                const remainingInterval = this.config.interTrialIntervalMs - (performance.now() - trial.onsetMs);
                if (remainingInterval > 0) await delay(remainingInterval, this.controller.signal);
            }

            this.setState('COMPLETE');
            this.run.completedAt = new Date().toISOString();
            this.emit('complete', { run: this.run });
        } catch (error) {
            if (error.name !== 'AbortError') throw error;
        }
    }

    abort() {
        if (!this.controller || this.controller.signal.aborted) return;
        this.controller.abort();
        this.activeTrial = null;
        this.setState('ABORTED');
        this.emit('aborted', { run: this.run });
    }
}
