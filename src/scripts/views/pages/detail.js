import '../templates/error-element';
import '../templates/restaurant-detail';
import '../templates/toast-alert';
import { html, render } from 'lit-html';
import { detailPageSkeleton } from '../../utils/skeleton-initiator';
import RestaurantApiDicodingSource from '../../data/restaurant-api-dicoding';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import UrlParser from '../../routes/url-parser';
import JSONConvert from '../../utils/json-converter';
import RestaurantIdb from '../../data/restaurant-idb';
import errorPage from '../../utils/error-page';

const Detail = {
  async render() {
    return `
    <section class="content"></section>
    <toast-alert></toast-alert>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetailContainer = document.querySelector('.content');
    render(html`${detailPageSkeleton()}`, restaurantDetailContainer);
    try {
      const restaurantDetail = await RestaurantApiDicodingSource.restaurantDetail(url.id);
      render(
        html`
        <restaurant-detail
          id="${restaurantDetail.id}"
          name="${restaurantDetail.name}"
          description="${restaurantDetail.description}"
          city="${restaurantDetail.city}"
          address="${restaurantDetail.address}"
          pictureId="${restaurantDetail.pictureId}"
          categories="${JSONConvert.toString(restaurantDetail.categories)}"
          menus="${JSONConvert.toString(restaurantDetail.menus)}"
          rating="${restaurantDetail.rating}"
          customers="${JSONConvert.toString(restaurantDetail.customerReviews)}"
          >
        </restaurant-detail>`,
        restaurantDetailContainer,
      );
      await document.querySelector('restaurant-detail').render();
      const favoriteButtonElement = document.querySelector('favorite-button');
      const toastElement = document.querySelector('toast-alert');
      await FavoriteButtonPresenter.init({
        favoriteButtonElement,
        toastElement,
        restaurantIdb: RestaurantIdb,
        restaurant: restaurantDetail,
      });
      document.querySelector('footer').innerHTML = '<p>Copyright © 2020 - Re:staurant</p>';
    } catch (error) {
      import('../../utils/toast-presenter')
        .then((module) => module.default)
        .then((ToastPresenter) => errorPage(ToastPresenter, restaurantDetailContainer, error))
        .catch((err) => console.error(err));
    }
  },
};

export default Detail;
