import RestaurantIdb from '../../src/scripts/data/restaurant-idb';
import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonElement: document.querySelector('favorite-button'),
    toastElement: document.querySelector('toast-alert'),
    restaurantIdb: RestaurantIdb,
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
