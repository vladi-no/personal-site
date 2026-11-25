// Fallback for browsers without Speculation Rules: prefetch nav links on hover/focus.
// Loaded as a module (deferred), so the DOM is ready when this runs.
const prefetch = (link) => {
    if (link.dataset.prefetched === 'true') return;

    const url = link.href;
    if (!url?.startsWith(location.origin)) return;

    const hint = document.createElement('link');
    hint.rel = 'prefetch';
    hint.href = url;
    hint.as = 'document';

    document.head.append(hint);
    link.dataset.prefetched = 'true';
};

if (!HTMLScriptElement.supports?.('speculationrules')) {
    for (const link of document.querySelectorAll('nav a[href]')) {
        link.addEventListener('mouseenter', () => prefetch(link));
        link.addEventListener('focus', () => prefetch(link));
    }
}
