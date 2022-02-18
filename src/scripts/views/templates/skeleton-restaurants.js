import { LitElement, html } from 'lit';

export default class SkeletonRestaurants extends LitElement {
  render() {
    return html`
      <div class="skeleton-container">
        <div class="skeleton">
          <div class="skeleton-restaurant">
            <div class="skeleton-restaurant-thumbnail">
              <div class="skeleton-restaurant-image"></div>
              <div class="skeleton-restaurant-city"></div>
              <div class="skeleton-restaurant-rating"></div>
            </div>
            <div class="skeleton-restaurant-info">
              <div class="skeleton-restaurant-title"></div>
              <div class="skeleton-restaurant-description">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('skeleton-restaurants', SkeletonRestaurants);
