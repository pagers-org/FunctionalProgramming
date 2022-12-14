// A
const shopping_cart = [];

// A
document.querySelectorAll('button').forEach(button =>
  button.addEventListener('click', ({ target }) => {
    const name = target.parentNode.querySelector('.menu-name').textContent;
    const category = target.parentNode.querySelector('.category').textContent;
    const price = target.parentNode.querySelector('.price').textContent;

    add_item_to_cart({ name, category, price });
  }),
);


// A
const add_item_to_cart = (item) => {
  const next_cart = add_item(shopping_cart, item);
  calc_cart_total(next_cart);
}

// A
const calc_cart_total = (cart) => {
  const shopping_cart_total = calc_cart_total_price(cart);

  update_shipping_icons(shopping_cart_total);
  set_cart_total_dom(shopping_cart_total);
  update_tax_dom(shopping_cart_total);
}

// A
const set_cart_total_dom = (cart_total) => {
  document.querySelector('.total-price').textContent = `${cart_total}원`;
}

// A
const update_shipping_icons = (cart_total) => {
  const buy_buttons = get_buy_buttons_dom();

  for (let i = 0; i < buy_buttons.length; i++) {
    const item = buy_buttons[i];
    const price = get_cart_price(item);
    const next_total = add(cart_total, price);


    gets_free_shipping(next_total, FREE_SHIPPING_PRICE)
      ? item.show_free_shopping_icon()
      : item.hide_free_shopping_icon();
  }
}

// A
const get_buy_buttons_dom = () => {
  const buttons = [];

  for (let i = 0; i < shopping_cart.length; i++) {
    const item = shopping_cart[i];
    item.show_free_shopping_icon = function () {
      console.log('DOM 의 아이콘을 보여줍니다');
    };
    item.hide_free_shopping_icon = function () {
      console.log('DOM 의 아이콘을 숨깁니다');
    };
    buttons.push(item);
  }

  return buttons;
}

// A
const update_tax_dom = (calc_total) => {
  set_tax_dom(calc_total * TAX_SCALE);
}

// A
const set_tax_dom = (value) => {
  document.querySelector('.total-price').textContent = value;
}


// C - shipping
const gets_free_shipping = (addedPrice, freeShippingPrice) => addedPrice >= freeShippingPrice;

// C - cart
const get_cart_price_list = (cart) => cart.map(item => get_cart_price(item));
const get_cart_price = ({ price }) => price;

// C - cart
const calc_cart_total_price = cart => sum_array(get_cart_price_list(cart));

// C - cart
const add_item = (cart, item) => add_element_to_array(cart, item);

// C - item
const calc_added_item = (total, item) => add(total, item.price);

// C - util
const sum_array = (numArray) => numArray.reduce(add, 0);

// C - util
const add_element_to_array = (array, element) => [...array, element];

// C - util
const add = (num1, num2) => num1 + num2;

// D
const FREE_SHIPPING_PRICE = 20000;
const TAX_SCALE = 0.1;