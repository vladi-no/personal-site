document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    function setTheme(mode) {
        html.setAttribute('data-theme', mode);
        html.style.colorScheme = mode === 'dark' ? 'dark' : 'light';
        localStorage.setItem('theme', mode);

        if (toggle) {
            toggle.textContent = (mode === 'dark') ? '🌚' : '🌞';
        }
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            setTheme(next);
        });
    }

    const saved = localStorage.getItem('theme');
    if (saved) {
        setTheme(saved);
    } else {
        const prefersDark =
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }
});
