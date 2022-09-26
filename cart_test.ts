Feature('cart');

Scenario('testing pizza purchase', ({ I }) => {
    I.see("Nenno's pizza"),
    I.see('Ricci'),
    I.see('Mozzarella, Ricci'),
    I.seeElement('~ricci_pizza_price[contains(., "$9")]'),
    I.screenshotElement("~ricci_pizza_details_btn", "RicciPizzaImage.png"),
    I.click('~ricci_pizza_title');
    const box = {
        left: 0,
        top: 1125,
        right: 1080,
        bottom: 2150
    };
    I.seeVisualDiff("~pizza_image", "RicciPizzaImage.png", {prepareBaseImage: true, tolerance: 1, ignoredBox: box}),
    I.seeCheckboxIsChecked('~/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[2]/android.widget.CheckBox'),
    I.performSwipe({ x: 480, y: 1715 }, { x: 480, y: 470 }),
    I.seeCheckboxIsChecked('~/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[5]/android.widget.CheckBox'),
    I.click('~com.docler.nennospizza:id/cnt'),
    I.click('~back_btn'),
    I.seeElement('~//android.view.ViewGroup[@content-desc="cart_icon"]/android.view.View'),
    I.click('~com.docler.nennospizza:id/icon'),
    I.seeElement('~cart_item_1_price[contains(., "$9")]'),
    I.click('~cart_item_1_delete_btn'),
    I.seeElement('~com.docler.nennospizza:id/suffix[contains(., "($0)")]'),
    I.click('~back_btn');
});
