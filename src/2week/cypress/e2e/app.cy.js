import { toNumber, calc_total_tax } from "../support/e2e";

const getDOMItemPrice = (index = 0) => {
  return cy.get('p > span.price')
    .eq(index)
    .invoke('text')
    .then((text) => toNumber(text));
}

describe('FECrash 카페', () => {
  beforeEach(() => {
    cy.visit({
      url: 'http://localhost:5173/src/2week',
      method: 'GET',
    });
  });

  context('최초 렌더링 시', () => {
    it('장바구니 총 가격은 0원이어야 한다.', () => {
      cy.get('.total-price').should('have.text', '0원');
    });
  });

  context('상품 추가하여 장바구니 확인', () => {
    it('첫번째 상품을 장바구니에 추가할 경우 장바구니엔 첫 번째 상품 가격에 부가세가 포함된 가격이 표시되야 한다.', () => {
      cy.get('.add-to-cart').first().click();
      
      getDOMItemPrice(0).then((price) => {
        const itemPrice = price + calc_total_tax(price); //TODO: 비즈니스 로직에서도 사용되는 부분이라 분리하면 좋을 듯

        cy.get('.total-price').invoke('text').then((total) => {
          expect(itemPrice).to.equal(toNumber(total));
        });
      })
    });
  });

  context('상품 추가하여 무료배송 확인', () => {
    it('모든 상품을 하나씩 추가할 경우 모든 상품에 무료 배송 아이콘이 있어야 한다.', () => {
      cy.get('.add-to-cart').click({ multiple: true });
      cy.get('.free-delivery').should('have.css', 'display', 'block');
    });
  });
});
