import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import RestaurantIdb from '../src/scripts/data/restaurant-idb';

describe('Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await RestaurantIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(RestaurantIdb);
});
