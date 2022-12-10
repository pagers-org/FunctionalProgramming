/**
 * Action 은 스네이크 표기법으로 작성 (ex. update_tax_dom)
 * Calc, Data 는 카멜 표기법으로 작성 (ex. addItem)
 */

// 전역변수와 관련 함수들. 모두 Action
let shopping_cart = [];
const fetch_shopping_cart = () => shopping_cart;
const update_shopping_cart = (cart) => {
  shopping_cart = cart;
};

// dom을 가져오거나 변경하는 Action 함수들
function get_buy_button_dom() {}
const update_tax_dom = (tax) => console.log(`tax_dom update to ${tax}`);
const update_cart_total_dom = (cartTotalPrice) =>
  console.log(`cart_total_dom update to ${cartTotalPrice}`);

const show_free_shipping_icon = (buttons) =>
  buttons.forEach((button) => {
    button.show_free_shipping_icon();
  });

const hide_free_shipping_icon = (buttons) =>
  buttons.forEach((button) => {
    button.hide_free_shipping_icon();
  });

// 메인 Action 함수
// 유저가 쇼핑 카트 아이템을 클릭 했을 때 실행되고 인자로 클릭한 아이템 정보를 받는다.
const click_shopping_cart_item = (name, price) => {
  // 전역 데이터의 정보를 가져오는 Action
  const shoppingCart = fetch_shopping_cart();

  // Calc
  const nextShoppingCart = addItem(shoppingCart, name, price);
  const totalPrice = getTotalPrice(nextShoppingCart);
  const tax = getTax(totalPrice);

  // dom을 업데이트 하는 Action 들
  update_cart_total_dom(totalPrice);
  update_tax_dom(tax);
  update_shipping_icons(totalPrice);

  // 전역변수 값을 변경하는 Action
  update_shopping_cart(nextShoppingCart);
};

// Calc
const getTax = (totalPrice) => totalPrice * 0.1;
const getTotalPrice = (carts) => carts.reduce((acc, cur) => acc + cur.price, 0);
const addItem = (previousCart, name, price) => [
  ...previousCart,
  { name, price },
];

export const update_shipping_icons = (totalPrice) => {
  const buyButtons = get_buy_button_dom(); // dom으로부터 button 리스트를 받아오는 Action

  // '버튼 데이터'와 '총 가격 데이터'를 통해
  // 무료 배송 아이콘을 show 해야 할 (또은 hide 해야 할) 버튼을 필터링하는 Calc
  const freeShippingButtons = filterFreeShippingButtons(buyButtons, totalPrice);
  const paidShippingButtons = filterPaidShippingButtons(buyButtons, totalPrice);

  // 인자로 넘겨준 버튼들의 무료 배송 아이콘을 show 또는 hide
  // dom을 업데이트하는 Action
  show_free_shipping_icon(freeShippingButtons);
  hide_free_shipping_icon(paidShippingButtons);
};

// Calc
const filterFreeShippingButtons = (buttons, totalPrice) =>
  buttons.filter((button) => isFreeShippingButton(button, totalPrice));

const filterPaidShippingButtons = (buttons, totalPrice) =>
  buttons.filter((button) => !isFreeShippingButton(button, totalPrice));

// Calc
const isFreeShippingButton = (button, totalPrice) => {
  const price = button.item.price;
  const predictedPrice = totalPrice + price;
  return isShippingFree(predictedPrice);
};
const isShippingFree = (price) => price >= 20;

export {
  isShippingFree,
  isFreeShippingButton,
  filterFreeShippingButtons,
  filterPaidShippingButtons,
  getTax,
  getTotalPrice,
  addItem,
};
