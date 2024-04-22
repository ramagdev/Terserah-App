const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant',  ({ I }) => {

    I.seeElement('#favoriteRestaurants');
    I.see('Tidak ada restoran yang disukai', '.resto-item__not__found');

});

Scenario('favoriting one restaurant',  async({ I }) => {
    
    I.seeElement('#favoriteRestaurants');
    I.see('Tidak ada restoran yang disukai', '.resto-item__not__found');
    
    I.amOnPage('/');
    I.seeElement('.resto-name a');
    const firstResto = locate('.resto-name a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#favButton');
    I.click('#favButton');

    I.amOnPage('/#/favorite');
    I.seeElement('resto-item');

    const favoritedRestoName = await I.grabTextFrom('.resto-name');
    assert.strictEqual(firstRestoName, favoritedRestoName);
});

Scenario('unfavoriting one restaurant',  async({ I }) => {
    
    I.seeElement('#favoriteRestaurants');
    I.see('Tidak ada restoran yang disukai', '.resto-item__not__found');
    I.amOnPage('/');

    I.seeElement('.resto-name a');
    const firstResto = locate('.resto-name a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#favButton');
    I.click('#favButton');

    I.amOnPage('/#/favorite');
    I.seeElement('resto-item');
    const favoritedRestoName = await I.grabTextFrom('.resto-name');
    assert.strictEqual(firstRestoName, favoritedRestoName);
    I.click(favoritedRestoName);

    I.seeElement('#favButton');
    I.click('#favButton');
    
    I.amOnPage('/#/favorite');
    I.see('Tidak ada restoran yang disukai', '.resto-item__not__found');
});
