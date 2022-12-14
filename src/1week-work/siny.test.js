const {
  hideIconButtonIndexList,
  showIconButtonIndexList,
  update_shipping_icons,
  update_tax_dom,
  calc_cart_total,
  add_item_to_cart,
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
  // it('parsePrice', () => {
  //   expect(parsePrice('10,000원')).toBe(10000);
  // });
  // it('_카트_총_가격', () => {
  //   expect(_카트_총_가격([{ price: 1000 }, { price: 2000 }])).toBe(3000);
  // });
});
