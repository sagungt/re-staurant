import '../templates/recomendation-restaurant';
import '../templates/restaurant-list';
import '../templates/restaurant-card';
import '../templates/error-element';
import '../templates/toast-alert';
import { html, render } from 'lit';
import { pageSkeleton } from '../../utils/skeleton-initiator';
import RestaurantApiDicodingSource from '../../data/restaurant-api-dicoding';
import JSONConvert from '../../utils/json-converter';
import errorPage from '../../utils/error-page';

const Home = {
  async render() {
    return `
    <section class="content"></section>
    <toast-alert></toast-alert>
    `;
  },

  async afterRender() {
    const contentContainer = document.querySelector('.content');
    render(html`${pageSkeleton('Explore Restaurant', 20)}`, contentContainer);
    try {
      const restaurantsList = await RestaurantApiDicodingSource.restaurantList();
      const recommendedRestaurant = restaurantsList.reduce((prev, curr) => (
        (prev.rating > curr.rating) ? prev : curr));
      render(
        html`
          <recommendation-restaurant data="${JSONConvert.toString(recommendedRestaurant)}"></recommendation-restaurant>'
          <restaurant-list heading="Explore Restaurant" data="${JSONConvert.toString(restaurantsList)}"></restaurant-list>
          `,
        contentContainer,
      );
      document.querySelector('footer').innerHTML = '<p>Copyright © 2020 - Re:staurant</p>';
    } catch (error) {
      import('../../utils/toast-presenter')
        .then((module) => module.default)
        .then((ToastPresenter) => errorPage(ToastPresenter, contentContainer, error))
        .catch((err) => console.error(err));
    }
  },
};

export default Home;
