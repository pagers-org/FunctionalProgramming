const {
  update_shipping_icons,
  update_tax_dom,
  calc_cart_total,
  add_item_to_cart,
  showIconButtonIndexList,
  hideIconButtonIndexList,
} = require('./67.after.js');

describe('시니 테스트', () => {
  it('showIconButtonIndexList', () => {
    const total = 10;
    const buttons = [{ item: { price: 9 } }, { item: { price: 20 } }];
    expect(showIconButtonIndexList(buttons, total)).toEqual([1]);
  });
  it('hideIconButtonIndexList', () => {
    const total = 10;
    const buttons = [{ item: { price: 9 } }, { item: { price: 20 } }];
    expect(hideIconButtonIndexList(buttons, total)).toEqual([0]);
  });
});
