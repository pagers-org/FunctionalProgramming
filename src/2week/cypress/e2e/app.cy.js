// 테스트를 위한 목업 데이터
// export import 를 위한 webpack 설정까지 하긴 귀찮아서 그냥 몰아놓고 테스트
const FE_CRASH_CAFE_MENUS = [
  { name: '오늘의 커피', price: 1000 },
  { name: '나이트로 바닐라 크림', price: 3500 },
  { name: '나이트로 콜드 브루', price: 4000 },
  { name: '돌체 콜드 브루', price: 3900 },
  { name: '민트 콜드 브루', price: 4800 },
  { name: '바닐라 크림 콜드 브루', price: 4300 },
  { name: '아이스 토피넛 라떼', price: 5500 },
  { name: '제주 비저링 콜드 브루', price: 6000 },
  { name: '라즈베리 쇼콜라', price: 7000 },
  { name: '클래식 스콘', price: 7200 },
  { name: '티라미수 크림 데니쉬', price: 7200 },
];
const TAX_SCALE = 0.1;

// 테스트
describe('FECrash 카페', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  context('최초 렌더링 시', () => {
    it('가격', () => {
      it('장바구니 총 가격은 0원이어야 한다.', () => {
        cy.get('.total-price').should('have.text', '0원');
      });

      it('부가세 총 가격은 0원이어야 한다.', () => {
        cy.get('.tax-price').should('have.text', '(부가세: 0원)');
      });
    });
  });

  context('모든 메뉴 클릭 시', () => {
    it('가격', () => {
      cy.get('.add-to-cart').click({ multiple: true });

      const total_price = FE_CRASH_CAFE_MENUS.reduce((acc, menu) => acc + menu.price, 0);
      const formatted_total_price = total_price.toLocaleString();
      const formatted_tax_price = (total_price * TAX_SCALE).toLocaleString();

      it(`장바구니 총 가격은 ${formatted_total_price}원이여야 한다.`, () => {
        cy.get('.total-price').should('have.text', `${formatted_total_price}원`);
      });

      it(`부가세 총 가격은 ${formatted_tax_price}원이여야 한다.`, () => {
        cy.get('.tax-price').should('have.text', `(부가세: ${formatted_tax_price}원)`);
      });
    });
  });

  context('특정 메뉴 클릭 시', () => {
    FE_CRASH_CAFE_MENUS.forEach((menu, index) => {
      it('가격', () => {
        cy.get('.add-to-cart').eq(index).click();
        const menu_price = menu.price.toLocaleString();

        it(`장바구니 총 가격은 ${menu_price}원이여야 한다.`, () => {
          cy.get('.total-price').should('have.text', `${menu_price}원`);
        });

        const tax_price = (menu.price * TAX_SCALE).toLocaleString();
        it(`부가세 총 가격은 ${tax_price}원이여야 한다.`, () => {
          cy.get('.tax-price').should('have.text', `(부가세: ${tax_price}원)`);
        });
      });
    });
  });
});
