var shopping_cart = [];
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  shopping_cart.push({
    name: name,
    price: price
  });
  calc_cart_total();
}

function update_shipping_icons() {
  var buy_buttons = get_buy_button_dom();
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
  set_tax_dom(shopping_cart_total * 0.10);
}

function calc_cart_total() {
  shopping_cart_total = 0;
  for(var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];
    shopping_cart_total += item.price;
  }
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

function set_tax_dom() {}
function set_cart_total_dom() {}
function get_buy_button_dom() {}