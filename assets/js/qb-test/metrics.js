const average = (values) => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : null;

const standardDeviation = (values, mean) => {
    if (!values.length || mean === null) return null;
    return Math.sqrt(values.reduce((sum, value) => sum + ((value - mean) ** 2), 0) / values.length);
};

export const computeMetrics = (trials) => {
    const counts = trials.reduce((result, trial) => {
        result[trial.classification] += 1;
        return result;
    }, { hit: 0, omission: 0, commission: 0, correctRejection: 0 });
    const matchTrials = trials.filter((trial) => trial.isMatch).length;
    const nonMatchTrials = trials.length - matchTrials;
    const reactionTimesMs = trials.filter((trial) => trial.classification === 'hit').map((trial) => trial.reactionTimeMs);
    const meanReactionTimeMs = average(reactionTimesMs);

    return {
        totalTrials: trials.length,
        matchTrials,
        nonMatchTrials,
        hits: counts.hit,
        omissions: counts.omission,
        commissions: counts.commission,
        correctRejections: counts.correctRejection,
        omissionRate: matchTrials ? counts.omission / matchTrials : null,
        commissionRate: nonMatchTrials ? counts.commission / nonMatchTrials : null,
        accuracy: trials.length ? (counts.hit + counts.correctRejection) / trials.length : null,
        meanReactionTimeMs,
        reactionTimeStandardDeviationMs: standardDeviation(reactionTimesMs, meanReactionTimeMs),
    };
};
