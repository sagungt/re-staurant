import { LitElement, html } from 'lit';

class ErrorElement extends LitElement {
  render() {
    return html`
    <div class="error">
      <h1>Something went wrong !!!</h1>
    </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('error-element', ErrorElement);
