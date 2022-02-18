import { LitElement, html } from 'lit';

class FavoriteButton extends LitElement {
  static get properties() {
    return {
      favorited: {
        type: Boolean,
        converter: {
          fromAttribute(value) {
            return !!value;
          },
        },
      },
    };
  }

  render() {
    return html`
    <button class="favorite ${this.favorited ? 'hide' : ''}" aria-label="add restaurant to favorite">
      &#9825;
    </button>
    <button class="favorited ${this.favorited ? '' : 'hide'}" aria-label="remove restaurant from favorite">
      &#9829;
    </button>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('favorite-button', FavoriteButton);
