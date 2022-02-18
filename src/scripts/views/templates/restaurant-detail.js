import './customer-review';
import './favorite-button';
import './toast-alert';
import { LitElement, html } from 'lit';
import JSONConvert from '../../utils/json-converter';
import API_ENDPOINT from '../../globals/api-endpoint';
import RestaurantApiDicodingSource from '../../data/restaurant-api-dicoding';
import ToastPresenter from '../../utils/toast-presenter';

export default class RestaurantDetail extends LitElement {
  static get properties() {
    return {
      id: String,
      name: String,
      description: String,
      city: String,
      address: String,
      pictureId: Number,
      categories: {
        attribute: true,
        type: Array,
        converter: {
          fromAttribute(value) {
            return JSONConvert.toJson(value);
          },
        },
      },
      menus: {
        attribute: true,
        type: Array,
        converter: {
          fromAttribute(value) {
            return JSONConvert.toJson(value);
          },
        },
      },
      rating: Number,
      customerReviews: {
        attribute: 'customers',
        type: Array,
        converter: {
          fromAttribute(value) {
            return JSONConvert.toJson(value);
          },
        },
        reflect: true,
      },
    };
  }

  render() {
    return html`
    <article class="restaurant-detail">
      <h1>${this.name}</h1>
      <div class="restaurant-detail-content">
        <div class="restaurant-detail-figure">
          <figure class="restaurant-detail-figure">
            <img
              src="${API_ENDPOINT.IMG_LARGE(this.pictureId)}"
              alt="${this.name}"
              width="100%"
              height="100%">
            <div class="restaurant-detail-rating">★ ${this.rating}</div>
            <figcaption>${this.description}</figcaption>
          </figure>
        </div>
        <div class="restaurant-detail-info">
          <h2 class="restaurant-detail-title">Information</h2>
          <dl>
            <dt><span>Name</span></dt>
            <dd>${this.name}</dd>
            <dt><span>City</span></dt>
            <dd>${this.city}</dd>
            <dt><span>Address</span></dt>
            <dd>${this.address}</dd>
            <dt><span>Rating</span></dt>
            <dd>★ ${this.rating}</dd>
            <dt><span>Categories</span></span></dt>
            <dd>${this.categories.map((category) => html`<div class="restaurant-detail-category">${category.name}</div>`)}</dd>
            <dt><span>Menu</span></dt>
            <dd>
              <div class="menus">
                <ul class="menu">
                  <li class="heading">Foods</li>
                  ${this.menus.foods.map((food) => html`<li class="list">${food.name}</li>`)}
                </ul>
                <ul class="menu">
                  <li class="heading">Drinks</li>
                  ${this.menus.drinks.map((drink) => html`<li class="list">${drink.name}</li>`)}
                </ul>
              </div>
            </dd>
            <dt><span>Reviews</span></dt>
            <dd>
              <div class="review-container">
              ${this.customerReviews.map((customer) => html`
                <customer-review
                  name="${customer.name}"
                  date="${customer.date}"
                  review="${customer.review}"></customer-review>
                `)}
              </div>
            </dd>
            <dt><span>Add New Review</span></dt>
            <dd>
              <form>
                <label for="reviewerName">Name</label>
                <input id="reviewerName" type="text" placeholder="Name">
                <label for="reviewerContent">Review</label>
                <textarea id="reviewerContent" rows="5" placeholder="Enter your review ..."></textarea>
              </form>
              <button id="addReviewButton" @click="${this._addReviewHandler}">Add new review</button>
            </dd>
          </dl>
        </div>
      </div>
    </article>
    <favorite-button></favorite-button>
    <toast-alert></toast-alert>
    `;
  }

  async _addReviewHandler() {
    if (window.navigator.onLine) {
      const name = this.querySelector('#reviewerName');
      const review = this.querySelector('#reviewerContent');
      const { id } = this;

      const response = await RestaurantApiDicodingSource.addNewReview({
        id,
        name: name.value,
        review: review.value,
      });

      if (!response.error) {
        this.setAttribute('customers', JSONConvert.toString(response.customerReviews));
        this._showToast('Review added');
      } else {
        this._showToast(response.message);
      }
      name.value = '';
      review.value = '';
    } else {
      this._showToast('Check your connection');
    }
  }

  _showToast(message) {
    const toastElement = this.querySelector('toast-alert');
    ToastPresenter.init({
      toastElement,
      message,
    });
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
