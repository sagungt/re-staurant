import { LitElement, html } from 'lit';

export default class SkeletonRecommendation extends LitElement {
  render() {
    return html`
    <div class="recommendation">
      <h1>Recommendation</h1>
      <div class="recommendation-content">
        <div class="skeleton-container">
          <div class="skeleton">
            <div class="skeleton-figure">
              <div class="skeleton-image"></div>
              <div class="skeleton-rating"></div>
            </div>
          </div>
        </div>
        <div class="skeleton-recommendation-info">
          <div class="skeleton-container">
            <div class="skeleton">
              <div class="vertical">
                <div class="skeleton-recommendation-title"></div>
                <div class="skeleton-recommendation-city"></div>
              </div>
              <div class="skeleton-recommendation-description">
                <div></div>
                <div></div>
                <div></div>
                <div class="skeleton-recommendation-button"></div>
              </div>
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

customElements.define('skeleton-recommendation', SkeletonRecommendation);
