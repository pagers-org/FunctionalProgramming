let shopping_cart = [];

// utils ----------------------------------------------------

const push = (arr, item) => [...arr, item];

const 문자를_숫자로_변환 = s => parseInt(s.replace(',', ''));

// business logic -------------------------------------------
/**
 * `totalPrice` 값이 20이상인지 아닌지 리턴
 * @return boolean
 */
const is_free_icon = totalPrice => totalPrice >= 20_000;

/**
 * 쇼핑 카트에 담긴 아이템 값 합산
 * @param {[]} cart
 */
const calc_shopping_cart_total = cart => {
  return cart.reduce((acc, { price }) => (acc += price), 0);
};

const calc_total_tax = total => total * 0.1;

// scheme ----------------------------------------------------

const add_item_to_cart = (arr, item) => push(arr, item);

// DOM Change ------------------------------------------------

const set_cart_total_dom = total => {
  document.querySelector('.total-price').textContent = total;
};

const show_free_shipping_icon = () => console.log('DOM 의 아이콘을 보여줍니다');
const hide_free_shipping_icon = () => console.log('DOM 의 아이콘을 숨깁니다.');

/**
 * @param totalPrice
 */
const update_shipping_icons = current_cart_total => {
  if (is_free_icon(current_cart_total)) {
    show_free_shipping_icon();
  } else {
    hide_free_shipping_icon();
  }
};

const 시작 = () => {
  document.querySelectorAll('button').forEach(button =>
    button.addEventListener('click', ({ target }) => {
      const name = target.parentNode.querySelector('.menu-name').textContent;
      const category = target.parentNode.querySelector('.category').textContent;
      const price = 문자를_숫자로_변환(target.parentNode.querySelector('.price').textContent);

      const newCart = [...shopping_cart];
      shopping_cart = add_item_to_cart(newCart, { name, category, price });
      const current_cart_total = calc_shopping_cart_total(shopping_cart);

      // Refactoring
      update_shipping_icons(current_cart_total);
      const total_tax = current_cart_total + calc_total_tax(current_cart_total);
      set_cart_total_dom(total_tax);
    }),
  );
};

시작();
