const download = (contents, filename, mimeType) => {
    const blob = new Blob([contents], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
};

const timestamp = () => new Date().toISOString().replace(/[:.]/g, '-');

export const downloadJson = (result) => {
    download(JSON.stringify(result, null, 2), `qb-test-${timestamp()}.json`, 'application/json');
};

const csvCell = (value) => `"${String(value ?? '').replaceAll('"', '""')}"`;

export const downloadCsv = (result) => {
    const headers = ['trialIndex', 'shape', 'color', 'displayColor', 'isMatch', 'responseTimestampsMs', 'reactionTimeMs', 'classification'];
    const rows = result.trials.map((trial) => [
        trial.index,
        trial.shape,
        trial.colorName,
        trial.displayColor || trial.color,
        trial.isMatch,
        trial.responseTimestampsMs.join(';'),
        trial.reactionTimeMs,
        trial.classification,
    ].map(csvCell).join(','));
    const metadata = [
        ['startedAt', result.metadata.startedAt],
        ['completedAt', result.metadata.completedAt],
        ['config', JSON.stringify(result.metadata.config)],
        ['metrics', JSON.stringify(result.metrics)],
    ].map(([key, value]) => `${csvCell(key)},${csvCell(value)}`);
    download([...metadata, '', headers.join(','), ...rows].join('\n'), `qb-test-${timestamp()}.csv`, 'text/csv;charset=utf-8');
};
