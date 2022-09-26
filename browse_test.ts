Feature('browse');

Scenario('test custom pizza', ({ I }) => {
    I.click('~add_custom_pizza_btn'),
    I.performSwipe({ x: 480, y: 1715 }, { x: 480, y: 470 }),
    I.click('~/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[3]/android.widget.CheckBox'),
    I.click('~/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[4]/android.widget.CheckBox'),
    I.click('~/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[5]/android.widget.CheckBox'),
    I.seeElement('~com.docler.nennospizza:id/suffix[contains(., "$11.5")]'),
    I.click('~com.docler.nennospizza:id/label'),
    I.click('~com.docler.nennospizza:id/icon'),
    I.click('~com.docler.nennospizza:id/label'),
    I.see('~Thank for your order')
    I.click('~com.docler.nennospizza:id/label');
});
