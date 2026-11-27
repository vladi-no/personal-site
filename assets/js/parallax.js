// Drives the lake parallax in styles.css through two custom properties.
const root = document.documentElement;

// --- Scroll: --lake-drift ---
// 4% of the page's scroll length (capped), so the lake moves at the same slow rate on every
// page, from the top to the very bottom. CSS alone can't do this: a scroll() timeline knows
// progress, not distance.
const SCROLL_RATE = 0.04;
const MAX_SCROLL_DRIFT = 160;

const updateScrollDrift = () => {
    const scrollLength = Math.max(0, root.scrollHeight - innerHeight);
    root.style.setProperty('--lake-drift', `${Math.min(scrollLength * SCROLL_RATE, MAX_SCROLL_DRIFT)}px`);
};

updateScrollDrift();
new ResizeObserver(updateScrollDrift).observe(document.body);
addEventListener('resize', updateScrollDrift);

// --- Pointer: --pointer-x ---
// The lake eases toward an offset opposite the pointer. Must match the extra 24px of
// background-size in styles.css (12px each side).
const MAX_POINTER_SHIFT = 12;
const EASING = 0.08;
const pointerParallax = matchMedia(
    '(hover: hover) and (pointer: fine) and (min-width: 601px) and (prefers-reduced-motion: no-preference)'
);

let target = 0;
let current = 0;
let frame = null;

const tick = () => {
    current += (target - current) * EASING;
    if (Math.abs(target - current) < 0.05) current = target;
    root.style.setProperty('--pointer-x', `${current.toFixed(2)}px`);
    frame = current === target ? null : requestAnimationFrame(tick);
};

const moveTo = (offset) => {
    target = offset;
    frame ??= requestAnimationFrame(tick);
};

addEventListener('pointermove', (event) => {
    if (!pointerParallax.matches || event.pointerType !== 'mouse') return;
    moveTo(-(event.clientX / innerWidth - 0.5) * 2 * MAX_POINTER_SHIFT);
}, { passive: true });

// Drift back to centre when the pointer leaves the window or the setting stops applying.
root.addEventListener('pointerleave', () => moveTo(0));
pointerParallax.addEventListener('change', () => moveTo(0));
