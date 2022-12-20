import { push } from './utils/array';
import { 문자를_숫자로_변환 } from './utils/format';

let shopping_cart: any[] = [];

// business logic -------------------------------------------
/**
 * `totalPrice` 값이 20이상인지 아닌지 리턴
 * @return boolean
 */
const is_free_icon = (totalPrice: number) => totalPrice >= 20_000;

/**
 * 쇼핑 카트에 담긴 아이템 값 합산
 * @param {[]} cart
 */
const calc_shopping_cart_total = (cart: any[]) => {
  return cart.reduce((acc, { price }) => (acc += price), 0);
};

const calc_total_tax = (total: number) => total * 0.1;

// scheme ----------------------------------------------------

const add_item_to_cart = (arr: any, item: any) => push(arr, item);

// DOM Change ------------------------------------------------

const set_cart_total_dom = (total: any) => {
  document.querySelector('.total-price')!.textContent = total;
};

const show_free_shipping_icon = () => console.log('DOM 의 아이콘을 보여줍니다');
const hide_free_shipping_icon = () => console.log('DOM 의 아이콘을 숨깁니다.');

/**
 * @param totalPrice
 */
const update_shipping_icons = (current_cart_total: number) => {
  if (is_free_icon(current_cart_total)) {
    show_free_shipping_icon();
  } else {
    hide_free_shipping_icon();
  }
};

const 시작 = () => {
  document.querySelectorAll('button').forEach(button =>
    button.addEventListener('click', (event) => {
      const { parentNode } = event.target as Element;
      if (!parentNode) return;
      const name = parentNode.querySelector('.menu-name')!.textContent;
      const category = parentNode.querySelector('.category')!.textContent;
      const price = 문자를_숫자로_변환(parentNode.querySelector('.price')!.textContent!);

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
