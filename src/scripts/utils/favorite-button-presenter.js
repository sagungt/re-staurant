import ToastPresenter from './toast-presenter';

const FavoriteButtonPresenter = {
  async init({
    favoriteButtonElement, toastElement, restaurantIdb, restaurant,
  }) {
    this._favoriteButtonElement = favoriteButtonElement;
    this._toastElement = toastElement;
    this._restaurantIdb = restaurantIdb;
    this._restaurant = restaurant;

    await this._initiateButton();
  },

  async _initiateButton() {
    const { id } = this._restaurant;
    if (await this._isFavorited(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isFavorited(id) {
    const restaurant = await this._restaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButtonElement.removeAttribute('favorited');

    const favoriteButton = this._favoriteButtonElement.querySelector('.favorite');
    favoriteButton.addEventListener('click', async () => {
      await this._restaurantIdb.putRestaurant(this._restaurant);
      ToastPresenter.init({
        toastElement: this._toastElement,
        message: `${this._restaurant.name} added to favorite`,
      });
      await this._initiateButton();
    });
  },

  _renderFavorited() {
    this._favoriteButtonElement.setAttribute('favorited', '1');

    const favoritedButton = this._favoriteButtonElement.querySelector('.favorited');
    favoritedButton.addEventListener('click', async () => {
      await this._restaurantIdb.deleteRestaurant(this._restaurant.id);
      ToastPresenter.init({
        toastElement: this._toastElement,
        message: `${this._restaurant.name} removed from favorite`,
      });
      await this._initiateButton();
    });
  },
};

export default FavoriteButtonPresenter;
