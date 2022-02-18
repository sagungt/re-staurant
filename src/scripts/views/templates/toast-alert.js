import { LitElement, html } from 'lit';

class ToastAlert extends LitElement {
  constructor() {
    super();
    this.message = '';
    this._delay = null;
  }

  static get properties() {
    return {
      message: {
        type: String,
      },
    };
  }

  attributeChangedCallback(name, oldVal, newVal) {
    super.attributeChangedCallback(name, oldVal, newVal);
    const toast = this.querySelector('div');
    if (!this._delay) {
      this._showToast(toast);
    } else {
      toast.classList.add('no-animation');
      clearTimeout(this._delay);
      this._showToast(toast);
    }
  }

  _showToast(toast) {
    toast.classList.add('show-toast');
    this._delay = setTimeout(() => { toast.classList.remove('show-toast'); }, 5000);
  }

  render() {
    return html`
    <div class="toast-alert">${this.message}</div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('toast-alert', ToastAlert);
