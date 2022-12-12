const {
  make_cart_item,
  add_element_last,
  add_item,
  calc_total,
  gets_free_shipping,
  calc_tax,
} = require('./index_refactor.js');

let list = [];
beforeEach(() => {
  console.log('before each');

  list = [
    { name: '사과', price: 400 },
    { name: '귤', price: 1000 },
    { name: '치킨', price: 20000 },
  ];
});

describe('4조 테스트', () => {
  it('카트 생성', () => {
    expect(make_cart_item('apple', 1000)).toEqual({ name: 'apple', price: 1000 });
  });

  it('배열 끝에 새로운 값 넣기', () => {
    const list = ['first', 'second', 'third'];
    expect(add_element_last(list, 'fourth')).toEqual(['first', 'second', 'third', 'fourth']);
  });

  it('카트에 아이템 추가하기', () => {
    const item = { name: '포도', price: 1000 };
    expect(add_item(list, item)).toEqual([
      { name: '사과', price: 400 },
      { name: '귤', price: 1000 },
      { name: '치킨', price: 20000 },
      { name: '포도', price: 1000 },
    ]);
  });

  it('장바구니 총 합계 계산', () => {
    expect(calc_total(list)).toBe(21400);
  });

  it('무료배송 확인하기', () => {
    expect(gets_free_shipping(list)).toBe(true);
  });

  it('세금 계산하기', () => {
    expect(calc_tax(1000)).toBe(100);
  });
});
