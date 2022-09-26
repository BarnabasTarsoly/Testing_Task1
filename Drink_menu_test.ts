Feature('Drink menu');

Scenario('Drink order', ({ I }) => {
    I.click('~com.docler.nennospizza:id/icon'),
    I.click('~Drinks'),
    I.click('~add_beer_btn'),
    I.click('~back_btn'),
    I.seeElement('~cart_item_1_title[contains(., "Beer")]'),
    I.click('~cart_item_1_delete_btn'),
    I.click('~back_btn');
});
