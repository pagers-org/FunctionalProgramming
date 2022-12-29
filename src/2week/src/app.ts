import { $, setTotalPriceOfCart, updateShippingIconsOfCart } from './utils/dom';
import { createItem } from './utils/item';
import { addItemToCart, Cart } from './utils/cart';
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

  setTotalPriceOfCart(addedCart);
  updateShippingIconsOfCart(addedCart);
  shoppingCart = addedCart;
});
