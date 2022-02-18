import FavoriteRestaurantView from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/favorited-restaurants/favorite-restaurant-show-presenter';
import RestaurantIdb from '../src/scripts/data/restaurant-idb';

describe('Showing all favorited restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been favorited', () => {
    it('should show the information that no restaurants have been liked', (done) => {
      document.querySelector('.content').addEventListener('restaurants:updated', () => {
        expect(document.querySelector('.restaurant-not-found'))
          .toBeTruthy();
        done();
      });
      const favoriteRestaurants = spyOnAllFunctions(RestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(RestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants)
        .toHaveBeenCalledTimes(1);
    });
  });

  describe('When favorite restaurant exist', () => {
    it('should show the restaurants', (done) => {
      const dummyData = [
        {
          id: 'rqdv5juczeskfw1e867',
          name: 'Melting Pot',
          description: 'lorem',
          city: 'Medan',
          address: 'Jln. Pandeglang no 19',
          pictureId: '14',
          categories: [
            {
              name: 'Italia',
            },
          ],
          menus: {
            foods: [
              {
                name: 'Paket rosemary',
              },
            ],
            drinks: [
              {
                name: 'Es krim',
              },
            ],
          },
          rating: 4.2,
          customerReviews: [
            {
              name: 'Ahmad',
              review: 'Tidak rekomendasi untuk pelajar!',
              date: '13 November 2019',
            },
          ],
        },
        {
          id: 'rqdv5juczeskfw1e867',
          name: 'Melting Pot',
          description: 'lorem',
          city: 'Medan',
          address: 'Jln. Pandeglang no 19',
          pictureId: '14',
          categories: [
            {
              name: 'Italia',
            },
          ],
          menus: {
            foods: [
              {
                name: 'Paket rosemary',
              },
            ],
            drinks: [
              {
                name: 'Es krim',
              },
            ],
          },
          rating: 4.2,
          customerReviews: [
            {
              name: 'Ahmad',
              review: 'Tidak rekomendasi untuk pelajar!',
              date: '13 November 2019',
            },
          ],
        },
      ];
      document.querySelector('.content').addEventListener('restaurants:updated', async () => {
        const restaurantList = document.querySelector('restaurant-list');
        restaurantList.data = dummyData;
        await restaurantList.render();
        expect(document.querySelectorAll('restaurant-card').length)
          .toEqual(2);
        done();
      });
      const favoriteRestaurants = spyOnAllFunctions(RestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues(dummyData);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
