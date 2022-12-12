let shopping_cart = [];
const MINPRICEOFFREESHIPPING  = 20

// C 
const tax = (totalPrice) => totalPrice * 0.1;
const cart_total_price = (carts)=> carts.reduce((acc, cur) => acc + cur.price, 0);
const add_item = (carts, item) => [...carts, item];
const is_free_shipping = (totalPrice) => totalPrice >= minPriceOfFreeShipping;

// A 전역변수 사용, 돔 변경
export const add_item_to_cart = (item) => {
  shopping_cart = add_item(shopping_cart, item)
  update_total_dom();
}
// A 돔읽음, 변경
export const update_shipping_icons = (totalPrice) => {
  const buy_buttons = get_buy_button_dom();
  buy_buttons.forEach((button) => {
    is_free_shipping(totalPrice) ?
      button.show_free_shipping_icon() :  button.hide_free_shipping_icon()
  })
}
// A 돔변경
export const update_total_dom = () => {
  set_cart_total_dom(cart_total_price);
  update_shipping_icons(cart_total_price);
  set_tax_dom(tax);
}

export const set_tax_dom = () => {}
export const set_cart_total_dom = () => {}
export const get_buy_button_dom = () => {}
