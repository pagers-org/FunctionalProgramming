interface ShoppingCartType {
  name: string;
  category: string;
  price: number;
}

let shoppingCart: ShoppingCartType[] = [];

document.querySelectorAll('button').forEach(button =>
  button.addEventListener('click', ({ target }) => {
    // console.log(target);
    const name = (target as Node).parentNode?.querySelector('.menu-name')?.textContent || '';
    const category = (target as Node).parentNode?.querySelector('.category')?.textContent || '';
    const price = (target as Node).parentNode?.querySelector('.price')?.textContent || '';
    const priceNumber = getNumberFromString(price);

    addItemToCart({ name, category, price: priceNumber });
    calcCartTotal();
  }),
);

const calcCartTotal = () => {
  const shoppingCartTotal = getTotalCartPrice(shoppingCart);

  setCartTotalDom(shoppingCartTotal);
  updateShippingIcons(shoppingCartTotal);
  updateTaxDom(shoppingCartTotal);
}

const setCartTotalDom = (shoppingCartTotal: number) => (document.querySelector('.total-price') as HTMLElement).textContent = makeKorFormat(shoppingCartTotal);

const updateShippingIcons = (shoppingCartTotal: number) => {
  const buyButtons = getBuyButtonsDom();
  buyButtons.forEach((buyButton) => {
    if (isOver(buyButton.price + shoppingCartTotal, 20000)) buyButton.showFreeShoppingIcon();
    else buyButton.hideFreeShoppingIcon();
  })
}

const getBuyButtonsDom = () => {
  return shoppingCart.map((cart) => ({
    ...cart,
    showFreeShoppingIcon: () => {
      (document.querySelectorAll('.free-shipping')).forEach((item) => (item as HTMLElement).style.display = 'block')
      // console.log("DOM 의 아이콘을 보여줍니다");
    },
    hideFreeShoppingIcon: () => {
      // console.log('DOM 의 아이콘을 숨깁니다');
    },
  }));
}

const updateTaxDom = (shoppingCartTotal: number) => setTaxDom(shoppingCartTotal, getTax(shoppingCartTotal));

const setTaxDom = (shoppingCartTotal: number, tax: number) => (document.querySelector('.total-price') as HTMLElement).textContent = makeKorFormat(getTotalPrice(shoppingCartTotal, tax));

// 계산
const TAX_RATE = 0.1;

const addItemToCart = (item: ShoppingCartType) => shoppingCart = [...shoppingCart, item];

const getNumberFromString = (input: string) => Number(input.replace(/,|원/g, ''));
const getTotalCartPrice = (cart: ShoppingCartType[]) => cart.reduce((prev, cur) => prev + cur.price, 0);

const getTax = (price: number) => price * TAX_RATE;
const getTotalPrice = (price: number, tax: number) => price + tax;

const makeKorFormat = (price: number) => `${Intl.NumberFormat('ko-KR').format(price)}원`;

const isOver = (input: number, value: number) => input >= value;
