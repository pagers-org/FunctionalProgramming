const { is_free_icon, calc_shopping_cart_total, calc_total_tax } = require('./BadCode.js');

const shopping_cart = [
  { name: '우유', price: 5 },
  { name: '식빵', price: 5 },
  { name: '계란', price: 5 },
];

describe('is_free_icon', () => {
  it('20보다 큰 값이 인자로 들어 왔을 때', () => {
    expect(is_free_icon(21)).toEqual(true);
  });

  it('20보다 작은 값이 인자로 들어 왔을 때', () => {
    expect(is_free_icon(11)).toEqual(false);
  });
});

describe('calc_shopping_cart_total', () => {
  it('카트의 총합은 15입니다.', () => {
    expect(calc_shopping_cart_total(shopping_cart)).toEqual(15);
  });
});

describe('calc_total_tax', () => {
  it('100이 들어왔을 때, Tax 결과 값은 10입니다.', () => {
    expect(calc_total_tax(100)).toEqual(10);
  });
});
