import RestaurantIdb from '../src/scripts/data/restaurant-idb';
import * as TestFactories from './test/testFactories';

const addFavoriteButtonAndToastElement = () => {
  document.body.innerHTML = '<favorite-button></favorite-button><toast-alert></toast-alert>';
};

describe('Add Restaurant To Favorite', () => {
  let favoriteButtonElement;

  beforeEach(() => {
    addFavoriteButtonAndToastElement();
    favoriteButtonElement = document.querySelector('favorite-button');
  });

  it('should show the favorite button when the restaurant has not been added before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      favoriteButtonElement.querySelector('[aria-label="add restaurant to favorite"]')
        .classList.contains('hide'),
    ).toBeFalsy();
  });

  it('should not show the favorite button when the restaurant has not been added before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(
      favoriteButtonElement.querySelector('[aria-label="remove restaurant from favorite"]')
        .classList.contains('hide'),
    )
      .toBeTruthy();
  });

  it('should able to add restaurant to favorite', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    favoriteButtonElement.querySelector('button').dispatchEvent(new Event('click'));
    const movie = await RestaurantIdb.getRestaurant(1);

    expect(movie)
      .toEqual({ id: 1 });

    RestaurantIdb.deleteRestaurant(1);
  });

  it('should not add restaurant again when its already favorited', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await RestaurantIdb.putRestaurant({ id: 1 });
    favoriteButtonElement.querySelector('button').dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.getAllRestaurants())
      .toEqual([{ id: 1 }]);

    await RestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when its has no id provided', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({});

    favoriteButtonElement.querySelector('button').dispatchEvent(new Event('click'));

    expect(await RestaurantIdb.getAllRestaurants())
      .toEqual([]);
  });
});
