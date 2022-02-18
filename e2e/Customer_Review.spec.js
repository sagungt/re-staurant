Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
  I.seeElement('recommendation-restaurant');
  I.click('recommendation-restaurant a');
});

const review = { name: 'John doe', content: `lorem ipsum ${new Date().toISOString()} from codecept` };

Scenario('when restaurant id wrong detail page should show error information', ({ I }) => {
  I.amOnPage('/#/detail/wrongId');

  I.seeElement('toast-alert');
  I.see('Something went wrong !!!', '.error h1');
});

Scenario('add new review to restaurant', ({ I }) => {
  I.seeElement('input');
  I.seeElement('textarea');
  I.seeElement('customer-review');

  I.fillField('input', review.name);
  I.fillField('textarea', review.content);

  I.click('#addReviewButton');

  I.see('Review added', 'toast-alert div');

  I.see(review.name, 'customer-review .review-name');
  I.see(review.content, '.review-content');
});

Scenario('error when no input value included', ({ I }) => {
  I.seeElement('input');
  I.seeElement('textarea');
  I.seeElement('customer-review');

  I.click('#addReviewButton');

  I.seeElement('toast-alert');
});
