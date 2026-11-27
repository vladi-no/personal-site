// Sets --lake-drift to 4% of the page's scroll length (capped), so the lake parallax in
// styles.css moves at the same slow rate on every page, from the top to the very bottom.
// CSS alone can't do this: a scroll() timeline knows progress, not distance.
const RATE = 0.04;
const MAX_DRIFT = 160;
const root = document.documentElement;

const update = () => {
    const scrollLength = Math.max(0, root.scrollHeight - innerHeight);
    root.style.setProperty('--lake-drift', `${Math.min(scrollLength * RATE, MAX_DRIFT)}px`);
};

update();
new ResizeObserver(update).observe(document.body);
addEventListener('resize', update);
