// Loaded as a module (deferred), so the DOM is ready when this runs.
// The initial theme is already applied by the inline script in the layout's <head>;
// this only wires up the toggle and follows OS changes until the visitor picks a theme.
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const systemDark = matchMedia('(prefers-color-scheme: dark)');

const readSaved = () => {
    try {
        const saved = localStorage.getItem('theme');
        return saved === 'light' || saved === 'dark' ? saved : null;
    } catch {
        return null;
    }
};

const applyTheme = (mode) => {
    root.dataset.theme = mode;
    root.style.colorScheme = mode;
    toggle?.setAttribute('aria-pressed', String(mode === 'dark'));
};

applyTheme(readSaved() ?? (systemDark.matches ? 'dark' : 'light'));

toggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try {
        localStorage.setItem('theme', next);
    } catch { }
});

systemDark.addEventListener('change', (event) => {
    if (!readSaved()) applyTheme(event.matches ? 'dark' : 'light');
});
