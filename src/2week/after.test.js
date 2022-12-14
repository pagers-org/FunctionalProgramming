const { add_item_to_array, calc_cart_total } = require('./after.js');

describe('cart test', () => {
  it('add_item_to_array', () => {
    const array = [{ name: '옷', price: 2000 }];
    const item = { name: '신발', price: 4000 };

    expect(add_item_to_array(array, item)).toEqual([
      { name: '옷', price: 2000 },
      { name: '신발', price: 4000 },
    ]);
  });
  it('calc_cart_total', () => {
    const array = [
      { name: '옷', price: 2000 },
      { name: '신발', price: 4000 },
    ];

    expect(calc_cart_total(array)).toBe(6000);
  });
});
