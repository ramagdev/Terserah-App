const assert = require('assert');

Feature ('Mengulas Restoran');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario ('Mengulas Restoran', async({ I }) => {
    
    I.seeElement('.resto-name a');
    const resto = locate('.resto-name a').last();
    const restoName = await I.grabTextFrom(resto);
    I.click(resto);

    I.seeElement('h2.resto-name');
    const reviewedRestoName = await I.grabTextFrom('h2.resto-name');
    assert.strictEqual(restoName, reviewedRestoName);

    I.seeElement('label[for="name"]');
    I.seeElement('input#name');
    I.seeElement('label[for="review"]');
    I.seeElement('textarea#review');
    I.seeElement('button#add-review');

    I.click('button#add-review');
    const validationMessage = await I.executeScript(function() {
        return document.getElementById('name').validationMessage;
    });
    assert.strictEqual(validationMessage, 'Please fill out this field.');

    I.fillField('#review', 'Test Review');
    I.click('button#add-review');
    const validationMessage2 = await I.executeScript(function() {
        return document.getElementById('name').validationMessage;
    });
    assert.strictEqual(validationMessage2, 'Please fill out this field.');
    I.clearField('#review');

    I.fillField('#name', 'Test Name');
    I.click('button#add-review');
    const validationMessage3 = await I.executeScript(function() {
        return document.getElementById('review').validationMessage;
    });
    assert.strictEqual(validationMessage3, 'Please fill out this field.');
    I.clearField('#name');

    I.fillField('#review', 'T');
    I.click('button#add-review');
    const validationMessage4 = await I.executeScript(function() {
        return document.getElementById('review').validationMessage;
    });
    assert.strictEqual(validationMessage4, 'Please lengthen this text to 2 characters or more (you are currently using 1 character).');
    I.clearField('#review');

    I.fillField('#name', 'Test Name Terserah2');
    I.fillField('#review', 'Test Review Terserah App2');
    I.click('button#add-review');
    I.wait(2)

    I.seeElement('review-item');
    const reviewName = locate('.review-name').last();
    const reviewNameText = await I.grabTextFrom(reviewName);
    assert.strictEqual(reviewNameText, 'Test Name Terserah2');

    const reviewReview = locate('.review-review').last();
    const reviewReviewText = await I.grabTextFrom(reviewReview);
    assert.strictEqual(reviewReviewText, 'Test Review Terserah App2');
});





