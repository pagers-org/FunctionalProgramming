import { TAX_RATE } from './constants/constant';
import { isOver } from './logic/logic';
import { ShoppingCartType } from './types/Shopping';
import { stringToNumber, sum, makeKorFormat } from './utils/utils';

let shoppingCart: ShoppingCartType[] = [];
let total: number = 0;
let tax: number = 0;
let totalWithTax: number = 0;

document.querySelectorAll('button').forEach((button) => 
  button.addEventListener('click', ({ target }) => {
    const name = getNodeByClassName(target, '.menu-name');
    const category = getNodeByClassName(target, '.category');
    const price = getNodeByClassName(target, '.price');

    const cart = addItemToCart({ name, category, price }, shoppingCart);
    const cartTotal = sum(total, stringToNumber(price));
    const cartTax = getTax(cartTotal);
    const cartTotalWithTax = sum(cartTotal, cartTax);

    shoppingCart = cart;
    total = cartTotal;
    tax = cartTax;
    totalWithTax = cartTotalWithTax;
    
    updateDom('.cart-price', cartTotal);
    updateDom('.tax', tax);
    updateDom('.total-price', totalWithTax);
    updateShippingIcons(total);
  })
);

const addItemToCart = (item: ShoppingCartType, shoppingCart: ShoppingCartType[]) => [...shoppingCart, item];

const getTax = (price: number) => price * TAX_RATE;

const updateShippingIcons = (total: number) => {
  if (isOver(total)) (document.querySelector('.free-shipping') as HTMLElement).style.display = 'block';
};

const getNodeByClassName = (target: EventTarget | null, className: string) => (target as Node).parentNode?.querySelector(className)?.textContent || '';

const updateDom = (classname: string, money: number) => (document.querySelector(classname) as HTMLElement).textContent = makeKorFormat(money);
