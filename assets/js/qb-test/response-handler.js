export class ResponseHandler {
    constructor(engine, button, responseKeys) {
        this.engine = engine;
        this.button = button;
        this.responseKeys = new Set(responseKeys);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        document.addEventListener('keydown', this.onKeyDown);
        this.button.addEventListener('click', this.onButtonClick);
    }

    onKeyDown(event) {
        if (!this.responseKeys.has(event.code) || event.repeat || !this.engine.canCaptureResponse()) return;
        event.preventDefault();
        this.engine.captureResponse(performance.now());
    }

    onButtonClick() {
        this.engine.captureResponse(performance.now());
    }

    setEnabled(enabled) {
        this.button.disabled = !enabled;
    }

    destroy() {
        document.removeEventListener('keydown', this.onKeyDown);
        this.button.removeEventListener('click', this.onButtonClick);
    }
}
