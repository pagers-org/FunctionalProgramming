let shopping_cart = [];
const MIN_PRICE_OF_FREE_SHIPPING  = 20

// C 
const tax = totalPrice => totalPrice * 0.1;
const cart_total_price = carts => carts.reduce((acc, cur) => acc + cur.price, 0);
const add_item = (items, item) => [...items, item];
const is_free_shipping = totalPrice => totalPrice >= minPriceOfFreeShipping;

// A 전역변수 사용, 돔 변경
export const add_item_to_cart = item => {
  shopping_cart = add_item(shopping_cart, item)
  update_total_dom(shopping_cart);
}
// A 돔읽음, 변경
export const update_shipping_icons = totalPrice => {
  const buy_buttons = get_buy_button_dom();
  buy_buttons.forEach((button) => {
    is_free_shipping(totalPrice) ?
      button.show_free_shipping_icon() :  button.hide_free_shipping_icon()
  })
}
// A 돔변경
export const update_total_dom = (shopping_cart) => {
  const totalPrice = cart_total_price(shopping_cart)
  set_cart_total_dom(totalPrice);
  update_shipping_icons(totalPrice);
  set_tax_dom(tax(totalPrice));
}

export const set_tax_dom = () => {}
export const set_cart_total_dom = () => {}
export const get_buy_button_dom = () => {}
