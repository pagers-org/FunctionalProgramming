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
    it('첫번째 상품을 장바구니에 추가할 경우 장바구니엔 1,100원이 표시되야 한다.', () => {
      cy.get('.add-to-cart').first().click();
      cy.get('.total-price').should('have.text', '1,100원');
    });
    it('모든 상품을 하나씩 추가할 경우 장바구니엔 61,270원이 표시되야 한다.', () => {
      cy.get('.add-to-cart').click({ multiple: true });
      cy.get('.total-price').should('have.text', '61,270원');
    });
  });

  context('상품 추가하여 무료배송 확인', () => {
    it('모든 상품을 하나씩 추가할 경우 모든 상품에 무료 배송 아이콘이 있어야 한다.', () => {
      cy.get('.add-to-cart').click({ multiple: true });
      cy.get('.free-delivery').should('have.css', 'display', 'block');
    });
  });
});
