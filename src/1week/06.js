const shopping_cart = [];
let shopping_cart_total = 0;

export function add_item_to_cart(cart, name, price) {
  const newCart = [
    ...cart,
    {
      name: name,
      price: price,
    },
  ];
  calc_cart_total();
}

export function update_shipping_icons() {
  const buy_buttons = get_buy_button_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i];
    const item = button.item;
    if (item.price + shopping_cart_total >= 20) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

export function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1);
}

export function calc_cart_total(carts) {
  const shopping_cart_total = carts.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();

  return shopping_cart_total;
}

export function set_tax_dom() {}
export function set_cart_total_dom() {}
export function get_buy_button_dom() {}
