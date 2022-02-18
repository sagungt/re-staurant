import JSONConvert from '../../../utils/json-converter';
import '../../templates/restaurant-list';

class FavoriteRestaurantView {
  getTemplate() {
    return `
    <section class="content">
    </section>
    `;
  }

  async showFavoriteRestaurants(restaurants = []) {
    const container = document.querySelector('.content');
    container.innerHTML = `
    <restaurant-list
      heading="Favorite Restaurant"
      data="${restaurants.length > 0 ? JSONConvert.toString(restaurants) : null}">
    </restaurant-list>`;
    const restaurantList = document.querySelector('restaurant-list');
    await restaurantList.render();
    container.dispatchEvent(new Event('restaurants:updated'));
  }
}

export default FavoriteRestaurantView;
