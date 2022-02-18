import { html } from 'lit';
import '../views/templates/skeleton-detail';
import '../views/templates/skeleton-recommendation';
import '../views/templates/skeleton-restaurants';

const pageSkeleton = (title, count, home = true) => {
  const dummyArray = [...Array(count)];
  return html`
  ${home ? html`<skeleton-recommendation></skeleton-recommendation>` : ''}
  <div class="restaurants">
    <h1>${title}</h1>
    ${home ? html`<hr>` : ''}
    <div class="restaurant-list">
      ${html`${dummyArray.map(() => html`<skeleton-restaurants></skeleton-restaurants>`)}`}
    </div>
  </div>
  `;
};

const detailPageSkeleton = () => html`<skeleton-detail></skeleton-detail>`;

export { pageSkeleton, detailPageSkeleton };
