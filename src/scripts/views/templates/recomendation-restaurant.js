import { LitElement, html } from 'lit';
import API_ENDPOINT from '../../globals/api-endpoint';

export default class RecommendationRestaurant extends LitElement {
  constructor() {
    super();
    this.recommendedRestaurant = {};
    this.updateComplete
      .then(() => {
        this.recommendedRestaurant = JSON.parse(this.data.replaceAll('\'', '"'));
        this.setAttribute('data', ''); // reset attribute value
      });
  }

  static get properties() {
    return {
      data: {
        attibute: true,
      },
      recommendedRestaurant: {
        attibute: false,
        type: Object,
      },
    };
  }

  render() {
    return html`
    <article class="recommendation">
      <h1>Recommendation</h1>
      <div class="recommendation-content">
        <figure class="recommendation-figure">
          <img
            src="${API_ENDPOINT.IMG_MEDIUM(this.recommendedRestaurant.pictureId)}"
            alt="${this.recommendedRestaurant.name}"
            width="100%"
            height="100%">
          <figcaption>★ ${this.recommendedRestaurant.rating}</figcaption>
        </figure>
        <div class="recommendation-info">
          <h2 class="recommendation-title">${this.recommendedRestaurant.name} | ${this.recommendedRestaurant.city}</h2>
          <p class="recommendation-description">${this.recommendedRestaurant.description}</p>
          <a href="#/detail/${this.recommendedRestaurant.id}" class="recommendation-button">See More</a>
        </div>
      </div>
    </article>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('recommendation-restaurant', RecommendationRestaurant);
