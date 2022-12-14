import {
  shopping_cart,
  add_item_to_cart,
  add_item,
  calc_total,
  get_free_shipping,
  calc_added_item,
  calc_tax,
} from './06_seed';

/*
  액션 함수에 대한 테스트 코드 => 테스트가 잘되는지 확인하기 위해서는 전역변수나 돔 변화를 체킹해야함
*/
describe('add_item_to_cart 함수', () => {
  [
    {
      scenario: '아이템 1개 추가',
      item: {name: 'banana', price: 700},
      want: [{name: 'banana', price: 700}],
    },
    {
      scenario: '아이템 1개 더 추가',
      item: {name: 'strawberry', price: 500},
      want: [{name: 'banana', price: 700}, {name: 'strawberry', price: 500}],
    },
  ].forEach(testCase =>
    it(testCase.scenario, () => {
      add_item_to_cart(testCase.item)
      expect(shopping_cart).toEqual(testCase.want);
    }),
  );
});

describe('현재 코드로 테스트 불가능한 함수들', () => {
  // calc_cart_total : 반환값이 없어 DOM 조작에 대한 여부를 확인해야하는데 관련 코드가 없으므로 생략
  // update_shipping_icons : 반환값이 없어 DOM 조작에 대한 여부를 확인해야하는데 관련 코드가 없으므로 생략
  // update_shipping_icon : 반환값이 없어 DOM 조작에 대한 여부를 확인해야하는데 관련 코드가 없으므로 생략
  // update_tax_dom : 반환값이 없어 DOM 조작에 대한 여부를 확인해야하는데 관련 코드가 없으므로 생략
});

/*
  계산 함수에 대한 테스트 코드
*/
describe('add_item', () => {
  [
    {
      scenario: '아이템 1개 추가',
      itemList: [],
      item: {name: 'banana', price: 700},
      want: [{name: 'banana', price: 700}],
    },
    {
      scenario: '아이템 1개 더 추가',
      itemList: [{name: 'banana', price: 700}],
      item: {name: 'strawberry', price: 500},
      want: [{name: 'banana', price: 700}, {name: 'strawberry', price: 500}],
    },
  ].forEach(testCase => it(testCase.scenario, () => expect(add_item(testCase.itemList, testCase.item)).toEqual(testCase.want)));
});

describe('calc_total', () => {
  [
    {
      scenario: '빈 배열인 경우',
      itemList: [],
      want: 0,
    },
    {
      scenario: '값이 들어오는 경우',
      itemList: [{ name: 'banana', price: 500 }, { name: 'strawberry', price: 700 }],
      want: 1200,
    },
  ].forEach(testCase => it(testCase.scenario, () => expect(calc_total(testCase.itemList)).toBe(testCase.want)));
});

describe('get_free_shipping', () => {
  [
    {
      scenario: '추가되는 item 가격으로 인해 무료 배송 조건이 만족하는 경우',
      total: 15,
      item: { name: 'strawberry', price: 7 },
      freeValue: 20,
      want: true,
    },
    {
      scenario: '추가되는 item 가격을 더해도 무료 배송 조건이 만족하지 않는 경우',
      total: 15,
      item: { name: 'strawberry', price: 4 },
      freeValue: 20,
      want: false,
    },
  ].forEach(testCase => it(testCase.scenario, () => expect(get_free_shipping(testCase.total, testCase.item, testCase.freeValue)).toBe(testCase.want)));
});

describe('calc_added_item', () => {
  it('추가된 아이템 가격을 더하는 경우', () => {
    expect(calc_added_item(15, { name: 'strawberry', price: 7 })).toBe(22);
  });
});

describe('calc_tax', () => {
  [
    {
      scenario: 'ratio 0.1일때 세금 계산',
      total: 15000,
      ratio: 0.1,
      want: 1500,
    },
    {
      scenario: 'ratio 0.2일때 세금 계산',
      total: 15000,
      ratio: 0.2,
      want: 3000,
    },
  ].forEach(testCase => it(testCase.scenario, () => expect(calc_tax(testCase.total, testCase.ratio)).toBe(testCase.want)));
});
