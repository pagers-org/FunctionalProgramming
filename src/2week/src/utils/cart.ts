import { push } from './array';
import { calcTax } from './business';
import { Item } from './item';

export type Cart = Item[];

export const addItemToCart = (cart: Cart, item: Item) => push<Item>(cart, item);

export const getCartTotal = (cart: Cart) => cart.reduce((acc, { price }) => (acc += price), 0);

export const getCartTotalWithTax = (cart: Cart) => {
  const cartTotal = getCartTotal(cart);
  const tax = calcTax(cartTotal);
  return cartTotal + tax;
};
