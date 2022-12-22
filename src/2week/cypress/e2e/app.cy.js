describe('FECrash 카페', () => {
  beforeEach(() => {
    cy.visit({
      url: 'http://localhost:5500/src/2week',
      method: 'GET',
    });
  });

  context('최초 렌더링 시', () => {
    it('장바구니 총 가격은 0원이어야 한다.', () => {
      cy.get('.total-price').should('have.text', '0원');
    });
  });

  context('장바구니에 담기', () => {
    it('4000원을 담으면 총 가격은 4400원이어야 한다.', () => {
      cy.get('.price').contains('4,000').parents('p').parents('div').find('button').eq(2).click();
      cy.get('.total-price').should('have.text', '4,400원');
    });
  });

  context('장바구니에 여러 번 담기', () => {
    it('4000원을 5번 담으면 총 가격은 22000원이어야 한다.', () => {
      for (let i = 0; i < 5; i++) {
        cy.get('.price').contains('4,000').parents('p').parents('div').find('button').eq(2).click();
      }
      cy.get('.total-price').should('have.text', '22,000원');
    });
  });

  context('무료배송 확인하기', () => {
    it('총 가격이 20000원이 안되면 무료배송이 아니어야 한다', () => {
      cy.get('.price').contains('4,000').parents('p').parents('div').find('button').eq(2).click();
      cy.get('.free-shipping').should('be.not.visible');
    });

    it('총 가격이 20000원이 넘으면 무료배송이어야 한다', () => {
      for (let i = 0; i < 5; i++) {
        cy.get('.price').contains('4,000').parents('p').parents('div').find('button').eq(2).click();
      }
      cy.get('.free-shipping').should('have.css', 'display', 'block');
    });
  });
});
