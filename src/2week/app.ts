interface ShoppingCartType {
  name: string;
  category: string;
  price: number;
}

let shoppingCart: ShoppingCartType[] = [];

document.querySelectorAll('button').forEach((button) => 
  button.addEventListener('click', ({ target }) => {
    const name = (target as Node).parentNode?.querySelector('.menu-name')?.textContent || '';
    const category = (target as Node).parentNode?.querySelector('.category')?.textContent || '';
    const price = (target as Node).parentNode?.querySelector('.price')?.textContent || '';
    const priceNumber = getNumberFromString(price);

    const cart = addItemToCart({ name, category, price: priceNumber }, shoppingCart);
    const cartTotal = calcCartTotal(cart); 
    const tax = getTax(cartTotal);
    
    updateDom('.cart-price', cartTotal);
    updateDom('.tax', tax);

    const total = getTotalPrice(cartTotal, tax)
    updateDom('.total-price', total);
    updateShippingIcons(total);

    shoppingCart = cart;
  })
);



const updateShippingIcons = (total: number) => {
  if (isOver(total, FREE_SHIPPING_PRICE)) (document.querySelector('.free-shipping') as HTMLElement).style.display = 'block';
};

const updateDom = (classname: string, money: number) => (document.querySelector(classname) as HTMLElement).textContent = makeKorFormat(money);

// 계산
const TAX_RATE = 0.1;
const FREE_SHIPPING_PRICE = 20000;

const calcCartTotal = (cart: ShoppingCartType[]) => cart.reduce((prev, cur) => prev + cur.price, 0);

const addItemToCart = (item: ShoppingCartType, shoppingCart: ShoppingCartType[]) => {
  const cart = [...shoppingCart, item];
  return cart;
}

const getNumberFromString = (input: string) => Number(input.replace(/,|원/g, ''));

const getTax = (price: number) => price * TAX_RATE;
const getTotalPrice = (price: number, tax: number) => price + tax;

const makeKorFormat = (price: number) => `${Intl.NumberFormat('ko-KR').format(price)}원`;

const isOver = (input: number, value: number) => input >= value;
