import { $, $$ } from "./utils/dom";
import { push } from "./utils/array";
import { toNumber, toCommaNumber } from "./utils/format";
import { CartType } from "./types/cart";

let shopping_cart: CartType[] = [];

$$('.add-to-cart').forEach(button =>
  button.addEventListener('click', ({target}) => {
    const item = (target as Element).closest('.item');
    
    if (!item) return;
    const name = $('.menu-name', item).textContent;
    const category = $('.category', item).textContent;
    const price = $('.price', item).textContent;

    if (!(name && category && price)) return;
    const copyCart = [...shopping_cart];
    shopping_cart = add_item_to_cart(copyCart, { name, category, price: toNumber(price) });

    const current_cart_total = calc_shopping_cart_total(shopping_cart);
    const total_tax = calc_total_tax(current_cart_total);
    const total_cart = current_cart_total + total_tax;
    set_cart_total_dom(total_cart);

    update_shipping_icons(total_cart, item);
  })
);

// Action ----------------------------------------------------
const set_cart_total_dom = (total: number) => {
  $<HTMLSpanElement>('.total-price').textContent = `${toCommaNumber(total)}원`;
};
const update_shipping_icons = (total: number, item: Element) => {
  const free_icon = $<HTMLEmbedElement>('.free-delivery', item);
  if (is_free_delivery(total)) {
    free_icon.style.display = 'block';
  } else {
    free_icon.style.display = 'none';
  }
}

// Calculate -------------------------------------------------
const add_item_to_cart = (arr: CartType[], item: CartType) => push<CartType>(arr, item);

const calc_shopping_cart_total = (cart: CartType[]) => {
  return cart.reduce((acc, { price }) => (acc += price), 0);
};
const calc_total_tax = (total: number) => total * 0.1;

const is_free_delivery = (total: number) => total > 20_000;