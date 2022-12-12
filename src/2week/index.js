var shopping_cart = [];
exports.shopping_cart = shopping_cart;
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  shopping_cart.push({
    name: name,
    price: price,
  });

  calc_cart_total();
}

function get_buy_buttons_dom() {}

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    if (item.price + shopping_cart_total >= 20) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

function update_tax_dom() {
  //   set_tax_dom(shopping_cart_total * 0.1);
}

function set_cart_total_dom() {}

function calc_cart_total() {
  shopping_cart_total = 0;

  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];

    shopping_cart_total += item.price;
  }

  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

/**
 * 팀 이름: 4팀
 *
 * 멤버
 * - 허브
 * - 빅터
 * - 혜원
 * - 로나
 */

module.exports = {
  add_item_to_cart,
  calc_cart_total,
};
