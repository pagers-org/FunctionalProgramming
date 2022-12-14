// A - 변경 가능한 전역 변수
let shopping_cart = [];

// A - 전역 변수를 참조하는 함수, 사이드 이펙트를 참조하는 함수
export const add_item_to_cart = (name, price) => {
  shopping_cart = add_Item(shopping_cart, name, price);
  calc_cart_total(shopping_cart);
};

// A - 액션 함수를 호출
export const update_shipping_icons = carts => {
  const buy_buttons = get_buy_button_dom();
  const shopping_cart_total = calc_shopping_cart_total(carts);

  buy_buttons.forEach(button => {
    const { item } = button;
    const is_free_shipping = gets_free_shipping(item.price, shopping_cart_total);

    is_free_shipping ? button.show_free_shipping_icon() : button.hide_free_shipping_icon();
  });
};

// A - 전역 변수를 참조하는 함수
export const update_tax_dom = carts => {
  const shopping_cart_total = calc_shopping_cart_total(carts);
  set_tax_dom(calc_tax(shopping_cart_total));
};

// A - 전역 변수를 변경하는 함수
export const calc_cart_total = carts => {
  set_cart_total_dom();
  update_shipping_icons(carts);
  update_tax_dom(carts);
};

// A - Dom을 바꾸는 사이드 이펙트가 있는 함수
export const set_tax_dom = tax => {
  // ...Dom 조작...
};
// A - Dom을 바꾸는 사이드 이펙트가 있는 함수
export const set_cart_total_dom = () => {
  // ...Dom 조작...
};
// A - Dom 호출 시점에 대한 영향을 받는 함수
export const get_buy_button_dom = () => {
  // ...Dom 에서 꺼내오기(호출 시점의 영향을 받음)...
  return [];
};

// C - 비즈니스 규칙 분리 된 계산
export const calc_tax = amount => {
  return amount * TAX_RATE;
};

// C - 명시적인 입출력의 계산
export const add_Item = (cart, name, price) => {
  return [...cart, { name, price }];
};

// C - 명시적인 입출력의 계산
export const calc_shopping_cart_total = carts => {
  return carts.reduce((acc, cur) => {
    return acc + Number(cur.price);
  }, 0);
};

// C - 배송팀에서 사용하는 비즈니스 규칙 분리
export const gets_free_shipping = (item_price, total) => {
  return Number(item_price) + Number(total) >= MIN_ITEM_PRICE_TO_FREE_SHIPPING;
};

// D - 해석이 필요한 데이터
const MIN_ITEM_PRICE_TO_FREE_SHIPPING = 20;
const TAX_RATE = 0.1;
