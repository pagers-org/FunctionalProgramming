import { calc_tax, add_Item, calc_shopping_cart_total, gets_free_shipping } from './06_신다혜.js';

describe('calculator test', () => {
  it('calc_tax', () => {
    expect(calc_tax(30)).toBe(3);
  });
  it('add_Item', () => {
    const price = 1000;
    const name = 'new Item';
    expect(add_Item([], name, price)).toStrictEqual([{ name, price }]);
  });
  it('calc_shopping_cart_total', () => {
    const mocking_shopping_cart = [
      {
        name: 'cola',
        price: 1000,
      },
      {
        name: 'coffee',
        price: 2000,
      },
    ];
    expect(calc_shopping_cart_total(mocking_shopping_cart)).toStrictEqual(3000);
  });
  it('gets_free_shipping - free shipping', () => {
    expect(gets_free_shipping(10, 20)).toBe(true);
  });
  it('gets_free_shipping - not free shipping', () => {
    expect(gets_free_shipping(1, 2)).toBe(false);
  });
});
