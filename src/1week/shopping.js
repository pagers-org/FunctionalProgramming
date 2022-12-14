function addItemToCart(name, price, cart) {
  // 계산
  cart.push({ name, price });
  calcCartTotal(cart);
  return cart;
}

function update_shipping_icons(shopping_cart_total) {
  var buy_buttons = get_buy_buttons_dom();

  buy_buttons.forEach((button) => {
    showOrHideButton(button.item.price, shopping_cart_total, button);
  });
}

function showOrHideButton(price, shopping_cart_total, button) {
  if (isOver(price, shopping_cart_total, 20)) {
    button.show_free_shipping_icon();
  } else {
    button.hide_free_shipping_icon();
  }
}

//계산
const isOver = (price, shopping_cart_total, number) => price + shopping_cart_total >= number;

// function update_tax_dom(shopping_cart_total) {
//   set_tax_dom(shopping_cart_total * 0.1);
// }

//계산
const calcTax = (shopping_cart_total) => shopping_cart_total * 0.1;

//계산
const count_calc_total = (cart) => cart.reduce((prev, curr) => prev + curr.price, 0);

function calcCartTotal(cart) {
  const shopping_cart_total = count_calc_total(cart);

  set_cart_total_dom();
  update_shipping_icons(shopping_cart_total);
  set_tax_dom(calcTax(shopping_cart_total));
}
