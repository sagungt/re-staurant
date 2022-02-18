import './restaurant-card';
import { LitElement, html } from 'lit';
import JSONConvert from '../../utils/json-converter';

export default class RestaurantList extends LitElement {
  constructor() {
    super();
    this.restaurants = null;
    this.updateComplete
      .then(() => {
        this.restaurants = this.data;
        this.setAttribute('data', ''); // reset attribute value
      });
  }

  static get properties() {
    return {
      data: {
        attribute: true,
        converter: {
          fromAttribute(value) {
            if (value) {
              return JSONConvert.toJson(value);
            }
            return null;
          },
        },
      },
      heading: {
        attribute: true,
        type: String,
      },
      restaurants: {
        attribute: false,
        type: Array,
      },
    };
  }

  render() {
    return html`
    ${this.restaurants
    ? html`
      <div class="restaurants">
        <h1>${this.heading}</h1>
        <hr>
        <div class="restaurant-list">
          ${this._renderRestaurants()}
        </div>
      </div>`
    : html`
      <h1>${this.heading}</h1>
      <h2 class="restaurant-not-found">There's no restaurant yet.</h2>
    `}`;
  }

  _renderRestaurants() {
    return this.restaurants.map((restaurant) => html`<restaurant-card data="${JSONConvert.toString(restaurant)}"></restaurant-card>`);
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('restaurant-list', RestaurantList);
