/* eslint-disable prettier/prettier */
//actions
function get_buy_buttons_dom() {
  //
}
function set_tax_dom() {
  //
}
function set_cart_total_dom() {
  //
}

var shopping_cart = [];
var shopping_cart_total = 0;

// 계산
function add_item_to_cart(name, price, carts) {
  // push는 불변성을 유지하지 않는 메서드이다.
  //1 cart list 조작
  return carts.concat([
    {
      name: name,
      price: price,
    },
  ]);
  // 전역 변수인 shopping_cart, shopping_cart_total 를 의존한다.
  // 2 cart list의 총합을 구합니다.
}

// 계산
const getButtonItemPrice = (button) => button.item.price;
const shouldShowIcon = (button, total) =>
  getButtonItemPrice(button) + total >= 20;
const showIconButtonIndexList = (buttons, total) =>
  buttons
    .map((button, index) => [button, index])
    .filter(([button, index]) => shouldShowIcon(button, total))
    .map(([button, index]) => index);

const hideIconButtonIndexList = (buttons, total) =>
  buttons
    .map((button, index) => [button, index])
    .filter(([button, index]) => !shouldShowIcon(button, total))
    .map(([button, index]) => index);

// action
function update_shipping_icons() {
  // dom이 있을 거라고 코드가 작성되어 있다. -> 횟수나, 시점에 의존한다. -> 액션이다.
  // 1. buttons -> dom ->
  var buy_buttons = get_buy_buttons_dom();
  showIconButtonIndexList(buy_buttons, shopping_cart_total).forEach((i) =>
    buy_buttons[i].show_free_shipping_icon()
  );
  hideIconButtonIndexList(buy_buttons, shopping_cart_total).forEach((i) =>
    buy_buttons[i].hide_free_shipping_icon()
  );
}

// 계산
const calc_tax = (aTotal) => aTotal * 0.1;
// action
function update_tax_dom(aTotal) {
  set_tax_dom(calc_tax(aTotal));
}

// 1,2 계산 -> 계산
const _카트_총_가격 = (cartList) => {
  let total = 0;
  for (var i = 0; i < cartList.length; i++) {
    var item = shopping_cart[i];
    total += item.price;
  }
  return total;
};

//action
function calc_cart_total(name, price) {
  // // 전역 변수인 shopping_cart, shopping_cart_total 를 의존한다.
  // // 1 shopping_cart를 이용해서
  // // 2 shopping_cart_total 을 변경하고
  // shopping_cart_total = 0;
  // for (var i = 0; i < shopping_cart.length; i++) {
  //   var item = shopping_cart[i];
  //   shopping_cart_total += item.price;
  // }

  // // 3 그 결과를 dom에 반영한다.
  // set_cart_total_dom();
  // // 해당 함수는 get_buy_buttons_dom 를 쓰는데 해당 함수는 돔을 읽어오므로 이 또한 액션이다.
  // update_shipping_icons();
  // // dom 조작은 action이다.
  // update_tax_dom();

  // total set
  shopping_cart = add_item_to_cart(name, price, shopping_cart);
  shopping_cart_total = _카트_총_가격(shopping_cart);

  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

// module.exports = {
//   update_shipping_icons,
//   update_tax_dom,
//   calc_cart_total,
//   add_item_to_cart,
//   showIconButtonIndexList,
//   hideIconButtonIndexList,
// };
