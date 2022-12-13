/**
 * Action 은 스네이크 표기법으로 작성 (ex. update_tax_dom)
 * Calc, Data 는 카멜 표기법으로 작성 (ex. addItem)
 */

// 전역변수와 관련 함수들. 모두 Action
let shopping_cart = [];
const getShoppingCart = () => shopping_cart;
const setShoppingCart = (cart) => {
  shopping_cart = cart;
};

// dom을 가져오거나 변경하는 Action 함수들
function getBuyButtonDom() {}
const updateTaxDom = (tax) => console.log(`tax_dom update to ${tax}`);
const updateCartTotalDom = (cartTotalPrice) =>
  console.log(`cart_total_dom update to ${cartTotalPrice}`);

const showFreeShippingIcon = (buttons) =>
  buttons.forEach((button) => {
    button.show_free_shipping_icon();
  });

const hideFreeShippingIcon = (buttons) =>
  buttons.forEach((button) => {
    button.hide_free_shipping_icon();
  });

// 메인 Action 함수
// 유저가 쇼핑 카트 아이템을 클릭 했을 때 실행되고 인자로 클릭한 아이템 정보를 받는다.
const clickShoppingCartItem = (name, price) => {
  // 전역 데이터의 정보를 가져오는 Action
  const shoppingCart = getShoppingCart();

  // Calc
  const nextShoppingCart = addCartItem(shoppingCart, name, price);
  const totalPrice = getCartTotalPrice(nextShoppingCart);
  const tax = getTax(totalPrice);

  // dom을 업데이트 하는 Action 들
  updateCartTotalDom(totalPrice);
  updateTaxDom(tax);
  updateShippingIcons(totalPrice);

  // 전역변수 값을 변경하는 Action
  setShoppingCart(nextShoppingCart);
};

// Calc
const getTax = (totalPrice) => totalPrice * 0.1;
const getCartTotalPrice = (carts) =>
  carts.reduce((acc, cur) => acc + cur.price, 0);
const addCartItem = (previousCart, name, price) => [
  ...previousCart,
  { name, price },
];

export const updateShippingIcons = (totalPrice) => {
  const buyButtons = getBuyButtonDom(); // dom으로부터 button 리스트를 받아오는 Action

  // '버튼 데이터'와 '총 가격 데이터'를 통해
  // 무료 배송 아이콘을 show 해야 할 (또은 hide 해야 할) 버튼을 필터링하는 Calc
  const freeShippingButtons = filterFreeShippingButtons(buyButtons, totalPrice);
  const paidShippingButtons = filterPaidShippingButtons(buyButtons, totalPrice);

  // 인자로 넘겨준 버튼들의 무료 배송 아이콘을 show 또는 hide
  // dom을 업데이트하는 Action
  showFreeShippingIcon(freeShippingButtons);
  hideFreeShippingIcon(paidShippingButtons);
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
  getCartTotalPrice,
  addCartItem,
};
