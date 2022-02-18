const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.see('There\'s no restaurant yet.', '.restaurant-not-found');
});

Scenario('add one and remove restaurant from favorite list', async ({ I }) => {
  I.see('There\'s no restaurant yet.', '.restaurant-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-title a');
  const firstRestaurant = locate('.restaurant-title a').last();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('favorite-button');
  I.click('favorite-button .favorite');

  I.amOnPage('/#/favorite');

  I.seeElement('restaurant-card');
  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant-title a');
  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

  I.click('restaurant-card a');

  I.seeElement('favorite-button');
  I.click('favorite-button .favorited');

  I.amOnPage('/#/favorite');

  I.see('There\'s no restaurant yet.', '.restaurant-not-found');
});
