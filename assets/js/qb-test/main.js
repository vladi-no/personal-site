import { CONFIG } from './config.js';
import { TrialEngine } from './trial-engine.js';
import { ResponseHandler } from './response-handler.js';
import { computeMetrics } from './metrics.js';
import { downloadCsv, downloadJson } from './export.js';

const element = (id) => document.getElementById(id);
const views = {
    instructions: element('instructions-view'),
    run: element('run-view'),
    summary: element('summary-view'),
    aborted: element('aborted-view'),
};
const stage = element('stimulus-stage');
const stimulus = element('stimulus');
const countdown = element('countdown');
const status = element('test-status');
const progress = element('test-progress');
const metricsElement = element('metrics');
const themeToggle = element('theme-toggle');
const themeToggleLabel = element('theme-toggle-label');
const engine = new TrialEngine(CONFIG);
const responseHandler = new ResponseHandler(engine, element('response-button'), CONFIG.responseKeys);
let completedResult = null;

const setTheme = (mode) => {
    document.documentElement.dataset.theme = mode;
    document.documentElement.style.colorScheme = mode;
    themeToggleLabel.textContent = mode === 'dark' ? 'Light' : 'Dark';
    themeToggle.setAttribute('aria-label', `Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`);
    try {
        localStorage.setItem('qb-test-theme', mode);
    } catch (error) { /* The page remains usable if storage is blocked. */ }
};

setTheme(document.documentElement.dataset.theme || 'dark');
themeToggle.addEventListener('click', () => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

const showView = (name) => {
    Object.entries(views).forEach(([viewName, view]) => {
        view.hidden = viewName !== name;
    });
};

const formatMs = (value) => value === null ? 'Not available' : `${Math.round(value)} ms`;
const formatRate = (value) => value === null ? 'Not available' : `${(value * 100).toFixed(1)}%`;
const displayColorFor = (trial) => document.documentElement.dataset.theme === 'light'
    ? CONFIG.lightModeColors[trial.colorName]
    : trial.color;

const renderMetrics = (metrics) => {
    const values = [
        ['Accuracy', formatRate(metrics.accuracy)],
        ['Omission errors', `${metrics.omissions} (${formatRate(metrics.omissionRate)})`],
        ['Commission errors', `${metrics.commissions} (${formatRate(metrics.commissionRate)})`],
        ['Mean reaction time', formatMs(metrics.meanReactionTimeMs)],
        ['Reaction-time variability', formatMs(metrics.reactionTimeStandardDeviationMs)],
        ['Correct responses', `${metrics.hits + metrics.correctRejections} / ${metrics.totalTrials}`],
    ];
    metricsElement.replaceChildren(...values.flatMap(([label, value]) => {
        const term = document.createElement('dt');
        term.textContent = label;
        const description = document.createElement('dd');
        description.textContent = value;
        return [term, description];
    }));
};

const resetVisuals = () => {
    stimulus.className = 'qb-test__shape';
    stimulus.style.backgroundColor = '';
    countdown.hidden = true;
    stage.classList.remove('is-stimulus');
    responseHandler.setEnabled(false);
};

const beginRun = () => {
    completedResult = null;
    resetVisuals();
    showView('run');
    status.textContent = 'Get ready';
    progress.textContent = `0 / ${CONFIG.totalTrials}`;
    engine.start();
};

element('start-test').addEventListener('click', beginRun);
element('restart-test').addEventListener('click', beginRun);
element('try-again').addEventListener('click', beginRun);
element('end-test').addEventListener('click', () => engine.abort());
element('export-json').addEventListener('click', () => completedResult && downloadJson(completedResult));
element('export-csv').addEventListener('click', () => completedResult && downloadCsv(completedResult));

engine.on('countdown', ({ value }) => {
    countdown.hidden = false;
    countdown.textContent = value;
    status.textContent = 'Starting';
});

engine.on('trialstart', ({ trial, totalTrials }) => {
    countdown.hidden = true;
    stage.classList.add('is-stimulus');
    stimulus.className = `qb-test__shape qb-test__shape--${trial.shape}`;
    trial.displayColor = displayColorFor(trial);
    stimulus.style.backgroundColor = trial.displayColor;
    status.textContent = 'Focus';
    progress.textContent = `${trial.index} / ${totalTrials}`;
    responseHandler.setEnabled(true);
});

engine.on('trialblank', () => {
    stage.classList.remove('is-stimulus');
    stimulus.className = 'qb-test__shape';
    stimulus.style.backgroundColor = '';
});

engine.on('trialcomplete', () => responseHandler.setEnabled(false));

engine.on('complete', ({ run }) => {
    resetVisuals();
    const metrics = computeMetrics(run.trials);
    completedResult = {
        metadata: {
            task: '1-back repetition detection CPT',
            startedAt: run.startedAt,
            completedAt: run.completedAt,
            totalTrials: run.trials.length,
            config: run.config,
        },
        metrics,
        trials: run.trials,
    };
    renderMetrics(metrics);
    showView('summary');
});

engine.on('aborted', () => {
    resetVisuals();
    showView('aborted');
});

window.addEventListener('beforeunload', () => engine.abort());
