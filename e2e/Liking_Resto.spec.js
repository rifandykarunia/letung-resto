Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('liking one resto', ({ I }) => {
  I.seeElement('.restaurant-item a');

  const firsResto = locate('.restaurant-item a').first();
  I.click(firsResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.seeElement('.restaurant-item a');
});

Scenario('unliking one resto', ({ I }) => {
  I.seeElement('.restaurant-item a');

  const firstResto = locate('.restaurant-item a').first();
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');

  I.seeElement('.restaurant-item a');

  const firstRestoLike = locate('.restaurant-item a').first();
  I.click(firstRestoLike);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
});
