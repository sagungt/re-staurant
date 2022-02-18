import '../templates/restaurant-list';
import '../templates/error-element';
import '../templates/toast-alert';
import { html, render } from 'lit';
import { pageSkeleton } from '../../utils/skeleton-initiator';
import RestaurantIdb from '../../data/restaurant-idb';
import JSONConvert from '../../utils/json-converter';
import errorPage from '../../utils/error-page';

const Favorite = {
  async render() {
    return `
    <section class="content"></section>
    <toast-alert></toast-alert>
    `;
  },

  async afterRender() {
    const favoriteContainer = document.querySelector('.content');
    render(html`${pageSkeleton('Favorite Restaurant', 10, false)}`, favoriteContainer);
    try {
      const restaurantsList = await RestaurantIdb.getAllRestaurants();
      render(
        html`<restaurant-list heading="Favorite Restaurant" data="${restaurantsList.length > 0 ? JSONConvert.toString(restaurantsList) : null}"></restaurant-list>`,
        favoriteContainer,
      );
      document.querySelector('footer').innerHTML = '<p>Copyright © 2020 - Re:staurant</p>';
    } catch (error) {
      import('../../utils/toast-presenter')
        .then((module) => module.default)
        .then((ToastPresenter) => errorPage(ToastPresenter, favoriteContainer, error))
        .catch((err) => console.error(err));
    }
  },
};

export default Favorite;
