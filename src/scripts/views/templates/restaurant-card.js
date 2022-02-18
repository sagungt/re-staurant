import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { LitElement, html } from 'lit';
import JSONConvert from '../../utils/json-converter';
import API_ENDPOINT from '../../globals/api-endpoint';

export default class RestaurantCard extends LitElement {
  constructor() {
    super();
    this.restaurant = {};
    this.updateComplete
      .then(() => {
        this.restaurant = JSONConvert.toJson(this.data);
        this.setAttribute('data', ''); // reset attribute value
      });
  }

  static get properties() {
    return {
      data: {
        attibute: true,
      },
      restaurant: {
        attibute: false,
        type: Object,
      },
    };
  }

  render() {
    return html`
    <article class="restaurant">
      <div class="restaurant-thumbnail">
        <img
          data-src="${API_ENDPOINT.IMG_SMALL(this.restaurant.pictureId)}"
          class="restaurant-image lazyload"
          alt="${this.restaurant.name}"
          width="100%"
          height="100%">
        <div class="restaurant-city"><span>${this.restaurant.city}</span></div>
        <div class="restaurant-rating">★ ${this.restaurant.rating}</div>
      </div>
      <div class="restaurant-info">
        <h2 class="restaurant-title"><a href="#/detail/${this.restaurant.id}">${this.restaurant.name}</a></h2>
        <p class="restaurant-description">${this.restaurant.description}</p>
      </div>
    </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('restaurant-card', RestaurantCard);
