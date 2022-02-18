import { LitElement, html } from 'lit';

export default class SkeletonDetail extends LitElement {
  render() {
    return html`
    <div class="restaurant-detail">
      <div class="skeleton-restaurant-detail-title">
        <div class="skeleton-container">
          <div class="skeleton">
            <div></div>
          </div>
        </div>
      </div>
      <div class="restaurant-detail-content">
        <div class="restaurant-detail-figure">
          <div class="skeleton-container">
            <div class="skeleton">
              <div class="skeleton-figure">
                <div class="skeleton-image"></div>
                <div class="skeleton-rating"></div>
              </div>
            </div>
          </div>
          <div class="skeleton-restaurant-detail-description-container">
            <div class="skeleton-restaurant-detail-description">
              <div class="skeleton-container">
                <div class="skeleton">
                  <div class="shape"></div>
                </div>
              </div>
            </div>
            <div class="skeleton-restaurant-detail-description">
              <div class="skeleton-container">
                <div class="skeleton">
                  <div class="shape"></div>
                </div>
              </div>
            </div>
            <div class="skeleton-restaurant-detail-description">
              <div class="skeleton-container">
                <div class="skeleton">
                  <div class="shape"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="restaurant-detail-info">
        <h2 class="restaurant-detail-title">Information</h2>
        <dl>
          <dt><span>Name</span></dt>
          <dd>
            <div class="skeleton-bar">
              <div class="skeleton-container">
                <div class="skeleton">
                  <div class="shape"></div>
                </div>
              </div>
            </div>
          </dd>
          <dt><span>City</span></dt>
          <dd>
            <div class="skeleton-bar">
              <div class="skeleton-container">
                <div class="skeleton">
                  <div class="shape"></div>
                </div>
              </div>
            </div>
          </dd>
          <dt><span>Address</span></dt>
          <dd>
            <div class="skeleton-bar">
              <div class="skeleton-container">
                <div class="skeleton">
                  <div class="shape"></div>
                </div>
              </div>
            </div>
          </dd>
          <dt><span>Rating</span></dt>
          <dd>
            <div class="skeleton-bar">
              <div class="skeleton-container">
                <div class="skeleton">
                  <div class="shape"></div>
                </div>
              </div>
            </div>
          </dd>
          <dt><span>Categories</span></dt>
          <dd>
            <div class="skeleton-bar">
              <div class="skeleton-container">
                <div class="skeleton">
                  <div class="shape"></div>
                </div>
              </div>
            </div>
          </dd>
          <dt><span>Menu</span></dt>
          <dd>
            <div class="skeleton-container">
              <div class="skeleton">
                <div class="menus">
                  <ul class="menu">
                    <li class="heading">Foods</li>
                    <li class="list">
                      <div class="skeleton-bar">
                        <div class="shape"></div>
                      </div>
                    </li>
                    <li class="list">
                      <div class="skeleton-bar">
                        <div class="shape"></div>
                      </div>
                    </li>
                    <li class="list">
                      <div class="skeleton-bar">
                        <div class="shape"></div>
                      </div>
                    </li>
                  </ul>
                  <ul class="menu">
                    <li class="heading">Drinks</li>
                    <li class="list">
                      <div class="skeleton-bar">
                        <div class="shape"></div>
                      </div>
                    </li>
                    <li class="list">
                      <div class="skeleton-bar">
                        <div class="shape"></div>
                      </div>
                    </li>
                    <li class="list">
                      <div class="skeleton-bar">
                        <div class="shape"></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </dd>
          <dt><span>Reviews</span></dt>
          <dd>
            <div class="review-container">
              <div class="skeleton-review-container">
                <div class="skeleton-container">
                  <div class="skeleton">
                    <div class="skeleton-review-item">
                      <div class="shape"></div>
                      <div class="shape"></div>
                      <div class="shape"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="skeleton-review-container">
                <div class="skeleton-container">
                  <div class="skeleton">
                    <div class="skeleton-review-item">
                      <div class="shape"></div>
                      <div class="shape"></div>
                      <div class="shape"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="skeleton-review-container">
                <div class="skeleton-container">
                  <div class="skeleton">
                    <div class="skeleton-review-item">
                      <div class="shape"></div>
                      <div class="shape"></div>
                      <div class="shape"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </dd>
          <dt><span>Add New Review</span></dt>
          <dd>
            <form>
              <label for="reviewerName">Name</label>
              <input id="reviewerName" type="text" placeholder="Name" disabled />
              <label for="reviewerContent">Review</label>
              <textarea id="reviewerContent" rows="5" placeholder="Enter your review ..." disabled></textarea>
            </form>
            <button id="addReviewButton" disabled>Add new review</button>
          </dd>
        </dl>
      </div>
      </div>
    </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('skeleton-detail', SkeletonDetail);
