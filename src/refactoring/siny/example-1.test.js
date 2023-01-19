const {
  setPriceByName,
  setQuantityByName,
  setTaxByName,
  setShippingByName,
  safeAppendNewItemToCart,
} = require('./example-1');

const carts = {
  item1: { shipping: 5, quantity: 1, tax: 2, price: 30 },
  item2: { shipping: 10, quantity: 3, tax: 10, price: 20 },
};

describe('example1', () => {
  describe('safeAppendNewItemToCart', () => {
    it('cart에 없는 key를 set하지 못한다.', () => {
      const res = safeAppendNewItemToCart(carts, 'item3', 'shipping', 20);
      expect(carts).toStrictEqual(res);
    });
    it('cart item에 없는 key를 set하지 못한다.', () => {
      const res = safeAppendNewItemToCart(carts, 'item1', 'noExistKey', 20);
      expect(carts).toStrictEqual(res);
    });
    it('내부값은 같아도 레퍼런스는 다르다.', () => {
      const res = safeAppendNewItemToCart(carts, 'item1', 'noExistKey', 20);
      expect(carts).not.toBe(res);
    });
  });
  describe('setPriceByName', () => {
    test('carts안에 해당하는 key의 price를 변경한다.', () => {
      const result = setPriceByName(carts, 'item1', 20);
      expect(result).toEqual({
        item1: { shipping: 5, quantity: 1, tax: 2, price: 20 },
        item2: { shipping: 10, quantity: 3, tax: 10, price: 20 },
      });
    });
  });
  describe('setQuantityByName', () => {
    test('carts안에 해당하는 key의 quantity를 변경한다.', () => {
      const result = setQuantityByName(carts, 'item1', 3);
      expect(result).toEqual({
        item1: { shipping: 5, quantity: 3, tax: 2, price: 30 },
        item2: { shipping: 10, quantity: 3, tax: 10, price: 20 },
      });
    });
  });
  describe('setTaxByName', () => {
    test('carts안에 해당하는 key의 tax를 변경한다.', () => {
      const result = setTaxByName(carts, 'item1', 0.15);
      expect(result).toEqual({
        item1: { shipping: 5, quantity: 1, tax: 0.15, price: 30 },
        item2: { shipping: 10, quantity: 3, tax: 10, price: 20 },
      });
    });
  });
  describe('setShippingByName', () => {
    test('carts안에 해당하는 key의 shipping을 변경한다.', () => {
      const result = setShippingByName(carts, 'item1', 7);
      expect(result).toEqual({
        item1: { shipping: 7, quantity: 1, tax: 2, price: 30 },
        item2: { shipping: 10, quantity: 3, tax: 10, price: 20 },
      });
    });
  });
});
