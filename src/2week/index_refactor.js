/****************************************************************************
 *
 *                                ACTION
 *
 ***************************************************************************/
let shopping_cart = [];

const set_cart_total_dom = () => {};
const get_buy_buttons_dom = () => {};
const set_tax_dom = () => {};

const add_item_to_cart = (name, price) => {
  const item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);

  const total = calc_total(shopping_cart);
  set_cart_total_dom(total);

  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
};

const update_shipping_icons = cart => {
  const buy_buttons = get_buy_buttons_dom();

  buy_buttons.map(button => {
    const { name, price } = button.item;
    const item = make_cart_item(name, price);
    const new_cart = add_item(cart, item);

    gets_free_shipping(new_cart) ? button.show_free_shipping_icon() : button.hide_free_shipping_icon();
  });
};

const update_tax_dom = total => set_tax_dom(calc_tax(total));
/****************************************************************************
 *
 *                             CALCULATE
 *
 ***************************************************************************/
const make_cart_item = (name, price) => {
  name, price;
};

const add_element_last = (array, elem) => [...array, elem];

const add_item = (cart, item) => add_element_last(cart, item);

const calc_total = cart => cart.reduce((acc, curr) => acc + curr.price, 0);

const gets_free_shipping = cart => calc_total(cart) >= 20;

const calc_tax = amount => amount * 0.1;
