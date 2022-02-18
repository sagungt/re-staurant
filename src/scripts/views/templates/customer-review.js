import { LitElement, html } from 'lit';

class CustomerReview extends LitElement {
  static get properties() {
    return {
      name: String,
      date: String,
      review: String,
    };
  }

  render() {
    return html`
    <div class="review">
      <span class="review-name">${this.name}</span>
      <span class="review-date">${this.date}</span>
      <p class="review-content">"${this.review}"</p>
    </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('customer-review', CustomerReview);
