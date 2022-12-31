import { createItem } from './utils/item';
import { addItemToCart, Cart } from './utils/cart';


import { CartType } from "Cart";
import { $, $$ } from "./utils/dom";
import { push } from "./utils/array";
import { toNumber, toCommaNumber } from "./utils/format";
import { MIN_TOTAL, TAX_RATE } from './constants/index';

import { cloneDeep } from 'lodash-es';

let shoppingCart: Cart = [];

$('[data-type="items"]').addEventListener('click', ({ target }) => {
  const targetEl = target as Element;
  const dataType = targetEl.getAttribute('data-type');
  if (dataType !== 'add-cart-btn') return;

  const itemEl = targetEl.closest('.item');
  if (!itemEl) return;
  const name = $('.menu-name', itemEl).textContent;
  const category = $('.category', itemEl).textContent;
  const price = $('.price', itemEl).textContent;

  if (!(name && category && price)) return;
  const item = createItem(name, category, price);
  const cartClone = cloneDeep(shoppingCart);

  const addedCart = addItemToCart(cartClone, item);

    update_shipping_icons(total_cart, item);
  })
);

// Action ----------------------------------------------------
const set_cart_total_dom = (total: number) => {
  $<HTMLSpanElement>('.total-price').textContent = `${toCommaNumber(total)}원`;
};
const update_shipping_icons = (total: number, item: Element) => {
  const free_icon = $<HTMLEmbedElement>('.free-delivery', item);
  const css = is_free_delivery(total) ? 'block' : 'none';
  free_icon.style.display = css;
}

// Calculate -------------------------------------------------
export const add_item_to_cart = (arr: CartType[], item: CartType) => push<CartType>(arr, item);

export const calc_shopping_cart_total = (cart: CartType[]) => {
  return cart.reduce((acc, { price }) => (acc += price), 0);
};
export const calc_total_tax = (total: number) => total * TAX_RATE;

export const is_free_delivery = (total: number) => total > MIN_TOTAL;
