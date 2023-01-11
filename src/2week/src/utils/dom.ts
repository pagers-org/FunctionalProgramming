import { isFreeDelivery } from './business';
import { Cart, getCartTotalWithTax } from './cart';
import { toCommaNumber } from './format';

type targetType = Document | HTMLElement | ParentNode | undefined;

export const $ = <T extends HTMLElement>(selector: string, target: targetType = document) => {
  const element = target.querySelector(selector) as T;
  if (!element) throw new Error('element not found');
  return element;
};

export const $$ = <T extends HTMLElement>(selector: string, target: targetType = document) => {
  const elements = target.querySelectorAll(selector) as NodeListOf<T>;
  if (!elements) throw new Error('elements not found');
  return elements;
};

export const setTotalPriceDOM = (price: number) => {
  $<HTMLSpanElement>('.total-price').textContent = toCommaNumber(price);
};
export const setTotalPriceOfCart = (cart: Cart) => {
  const totalPrice = getCartTotalWithTax(cart);
  setTotalPriceDOM(totalPrice);
};

export const updateShippingIconsDOM = (isShow: boolean) => {
  const freeIcon = $<HTMLEmbedElement>('[data-type="free-shipping-icon"]');
  if (isShow) {
    freeIcon.style.visibility = 'unset';
    return;
  }
  freeIcon.style.visibility = 'hidden';
};

export const updateShippingIconsOfCart = (cart: Cart) => {
  const totalPrice = getCartTotalWithTax(cart);
  const showFreeIcon = isFreeDelivery(totalPrice);
  updateShippingIconsDOM(showFreeIcon);
};
