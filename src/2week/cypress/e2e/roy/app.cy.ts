describe('FECrash 카페', () => {
  beforeEach(() => {
    cy.visit({
      url: 'http://localhost:5500/src/2week',
      method: 'GET',
    })
  })

  context('최초 렌더링 시', () => {
    it('장바구니 총 가격은 0원이어야 한다.', () => {
      cy.get('.total-price').should('have.text', '0원')
    })
  })

  context('장바구니 테스트', () => {
    it('바닐라크림콜드브루를 한 번만 담으면 총액 4300원, 부가세 430원, 배송비무료 상품 없음', () => {
      cy.get('.item').eq(6).find('button').click()
      cy.get('.total-price').should('have.text', '4,300원')
      cy.get('.total-tax').should('have.text', '430원')
      cy.get('.item').each($item => {
        expect($item).not.to.have.class('free')
      })
    })
    it('바닐라크림콜드브루를 세 번 담으면 총액 12900원, 부가세 1290원, 티라미수는 배송비무료', () => {
      cy.get('.item').eq(6).find('button').click().click().click()
      cy.get('.total-price').should('have.text', '12,900원')
      cy.get('.total-tax').should('have.text', '1,290원')
      cy.get('.item').last().should('have.class', 'free')
      .siblings().each($item => {
        expect($item).not.to.have.class('free')
      })
    })

    it('바닐라크림콜드브루를 다섯 번 담으면 총액 21500원, 부가세 2150원, 모든 상품 배송비무료', () => {
      cy.get('.item').eq(6).find('button').click().click().click().click().click()
      cy.get('.total-price').should('have.text', '21,500원')
      cy.get('.total-tax').should('have.text', '2,150원')
      cy.get('.item').each($item => {
        expect($item).to.have.class('free')
      })
    })
  })
})

export {}