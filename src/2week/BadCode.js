const shopping_cart = [];
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  shopping_cart.push({
    name: name,
    price: price,
  });
  calc_cart_total();
}

/**
 * `totalPrice` 값이 20이상인지 아닌지 리턴
 * @return boolean
 */
function is_free_icon(totalPrice) {
  return totalPrice >= 20;
}

/**
 * @param totalPrice
 */
function update_shipping_icons(current_cart_total) {
  var buy_buttons = get_buy_buttons_dom();

  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;

    if (is_free_icon(item.price + current_cart_total)) {
      buy_buttons.show_free_shipping_icon();
    } else {
      buy_buttons.hide_free_shipping_icon();
    }
  }
}

const calc_total_tax = total => {
  return total * 0.1;
};
/**
 * 쇼핑 카트에 담긴 아이템 값 합산
 * @param {[]} cart
 */
const calc_shopping_cart_total = cart => {
  return cart.reduce((acc, { price }) => (acc += price), 0);
};

function calc_cart_total() {
  const current_cart_total = calc_shopping_cart_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons(current_cart_total);

  const total_tax = calc_total_tax(current_cart_total);
  set_tax_dom(total_tax);
} //

// for DOM update
function set_tax_dom() {}
function set_cart_total_dom() {}
function get_buy_buttons_dom() {
  return {
    show_free_shipping_icon() {},
    hide_free_shipping_icon() {},
  };
}

module.exports = { is_free_icon, calc_shopping_cart_total, calc_total_tax };
