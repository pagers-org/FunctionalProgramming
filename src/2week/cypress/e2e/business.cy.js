import { add_item_to_cart, calc_shopping_cart_total, calc_total_tax, is_free_delivery } from '../support/e2e';

describe('FECrash 카페', () => {
  context('Calculate 함수 값 확인', () => {
    const CART_LENGTH = 100;
    const 바닐라_라떼_PRICE = 3000;
    const cart = [...Array(CART_LENGTH).fill({ name: '바닐라 라떼', category: 'C', price: 바닐라_라떼_PRICE })];
    
    
    it('장바구니에 아이템이 추가된 새로운 배열을 반환한다.', () => {
      const product = {
        name: '커피',
        category: 'C',
        price: 1000
      }
      const value = add_item_to_cart(cart, product);
      expect(value).to.deep.equal([...cart, product]);
    });

    it('장바구니의 모든 상품의 합산을 구해야 한다.', () => {
      const value = calc_shopping_cart_total(cart);
      expect(value).equal(CART_LENGTH * 바닐라_라떼_PRICE);
    });

    it('총 금액의 부가세를 구해야 한다.', () => {
      const value = calc_total_tax(CART_LENGTH * 바닐라_라떼_PRICE);
      expect(value).equal(CART_LENGTH * 바닐라_라떼_PRICE * 0.1);
    });

    it('20,000원 이상인 경우 무료 배송 되어야 한다.', () => {
      const value = is_free_delivery(CART_LENGTH * 바닐라_라떼_PRICE);
      expect(value).equal(true);
    });
  });
});
