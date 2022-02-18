import RestaurantIdb from '../src/scripts/data/restaurant-idb';
import * as TestFactories from './test/testFactories';
import '../src/scripts/views/templates/favorite-button';
import '../src/scripts/views/templates/toast-alert';

const addFavoriteButtonAndToastElement = () => {
  document.body.innerHTML = '<favorite-button></favorite-button><toast-alert></toast-alert>';
};

describe('Remove Restaurant From Favorite', () => {
  let favoriteButtonElement;

  beforeEach(async () => {
    addFavoriteButtonAndToastElement();
    await RestaurantIdb.putRestaurant({ id: 1 });
    favoriteButtonElement = document.querySelector('favorite-button');
  });

  afterEach(async () => {
    await RestaurantIdb.deleteRestaurant(1);
  });

  it('should display remove favorite button when movie has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      favoriteButtonElement.querySelector('[aria-label="remove restaurant from favorite"]')
        .classList.contains('hide'),
    )
      .toBeFalsy();
  });

  it('should not display add favorite button when movie has been favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      favoriteButtonElement.querySelector('[aria-label="add restaurant to favorite"]')
        .classList.contains('hide'),
    )
      .toBeTruthy();
  });

  it('should be able to remove favorite restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    favoriteButtonElement
      .querySelector('[aria-label="remove restaurant from favorite"]')
      .dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.getAllRestaurants())
      .toEqual([]);
  });

  it('should not throw error if the not favorited restaurant is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await RestaurantIdb.deleteRestaurant(1);

    favoriteButtonElement
      .querySelector('[aria-label="remove restaurant from favorite"]')
      .dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.getAllRestaurants())
      .toEqual([]);
  });
});
