let shopping_cart = []; // A: 전역 데이터

// A: 전역 변수를 읽음
const add_item_to_cart = item => {
  shopping_cart = add_item(shopping_cart, item);
  calc_cart_total();
};

// A: 돔을 조작하고 전역 변수를 읽음
const calc_cart_total = () => {
  const shopping_cart_total = calc_total(shopping_cart);

  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom(shopping_cart_total);
};

// A: 돔을 조작함
const update_shipping_icons = () => {
  const buy_buttons = get_buy_button_dom();
  buy_buttons.forEach(update_shipping_icon);
};

// A: 돔을 조작하고 전역 변수를 읽음
const update_shipping_icon = button => {
  const { show_free_shipping_icon, hide_free_shipping_icon, item: button_item } = button;
  const cart_total = calc_total(shopping_cart);

  get_free_shipping(calc_cart_total, button_item) ? show_free_shipping_icon() : hide_free_shipping_icon();
};

// A: 돔을 조작함
const update_tax_dom = cart_total => set_tax_dom(calc_tax(cart_total));

// C
const add_item = (itemList, item) => [...itemList, item];

// C
const calc_total = calc_list => calc_list.reduce(calc_added_item, 0);

// C
const get_free_shipping = (total, item, freeValue = 20) => calc_added_item(total, item) >= freeValue;

// C
const calc_added_item = (total, item) => total + item.price;

// C
const calc_tax = (total, ratio = 0.1) => total * ratio;

// 예제에 호출은 하지만 정의는 안돼있는 함수들 임의 정의
const set_tax_dom = () => null;
const set_cart_total_dom = () => null;
const get_buy_button_dom = () => [];

// 테스트를 위한 export
export {
  shopping_cart,
  add_item_to_cart,
  calc_cart_total,
  update_shipping_icons,
  update_shipping_icon,
  update_tax_dom,
  add_item,
  calc_total,
  get_free_shipping,
  calc_added_item,
  calc_tax,
};
