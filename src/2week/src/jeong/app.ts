type Item = {
  name: string;
  amount: number;
  price: number;
  category: string;
  showFreeShippingIcon: () => void;
  hideFreeShippingIcon: () => void;
};

let shopping_cart: Item[] = [];
let shopping_cart_total: number = 0;
let tax: number = 0;

// 유틸
const numerize = (price: string) =>
  Number(
    price
      .split("")
      .filter((num) => !isNaN(Number(num)))
      .join("")
  );
// 액션
const addItemToCart = (item: Item, shopping_cart: Item[]) => {
  const copyItem = { ...item };

  shopping_cart.push(copyItem);

  return shopping_cart;
};
// 계산
const calcCartTotal = (shopping_cart: Item[]) => {
  let shopping_cart_total = 0;

  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    shopping_cart_total += item.price;
  }

  return shopping_cart_total;
};
// 액션
const setCartTotalDOM = (shopping_cart_total: number) => {
  document.querySelector(".total-price").textContent =
    JSON.stringify(shopping_cart_total); //전역변수 대신 인자를 사용한다.
};
// 액션
const updateShippingIcons = (
  shopping_cart: Item[],
  shopping_cart_total: number,
  target
) => {
  const buy_buttons = setBuyButtons(shopping_cart, target);
  for (let i = 0; i < buy_buttons.length; i++) {
    let item = buy_buttons[i];

    if (item.price + shopping_cart_total >= 20000) item.showFreeShippingIcon();
    item.hideFreeShippingIcon();
  }
};
// 계산
const setBuyButtons = (shopping_cart: Item[], target) => {
  const buttons = [];

  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    item.showFreeShippingIcon = function () {
      target.parentNode.classList.add("free-shipping-icon");
      console.log(target.parentNode);
    };
    item.hideFreeShippingIcon = function () {
      // target.parentNode.classList.remove("free-shipping-icon");
      // console.log(target.parentNode);
    };
    buttons.push(item);
  }
  return buttons;
};
// 계산
const calcTax = (amount: number) => {
  return amount * 0.1;
};
//액션
const setTaxDOM = (tax: number) => {
  document.querySelector(".total-tax").textContent = JSON.stringify(tax);
};
//유틸
const $ = (selector: string, target) => {
  const element = target.parentNode.querySelector(selector).textContent;
  return element;
};
//액션
const getDOM = ({ target }) => {
  const name = $(".menu-name", target);
  const category = $(".category", target);
  let price = $(".price", target);
  return [name, category, price];
};
// 계산
const searchItem = (name: string) => {
  const duplicated = shopping_cart.find((e) => e.name === name);
  return duplicated ? duplicated : false;
};
// 계산
const plusItemAmount = (sameItemInCart: Item) => {
  const cartCopy = [...shopping_cart];
  cartCopy.forEach((item) => {
    item.amount = item.amount ? item.amount++ : 1;
    if (item.name === sameItemInCart.name) item.amount++;
  });
  return cartCopy;
};

//액션
const handleClick = ({ target }) => {
  // dom 에서 아이템 정보를 불러온다.
  let [name, category, price] = getDOM({ target });
  // 타입 변환
  price = numerize(price);

  // 이미 장바구니에 있는 아이템인지 확인
  const sameItemInCart = searchItem(name);

  // 카트에 아이템/수량 추가
  if (sameItemInCart) shopping_cart = plusItemAmount(sameItemInCart);
  shopping_cart = addItemToCart(
    {
      name,
      category,
      price,
      amount: 0,
    },
    shopping_cart
  );

  // 아이템 가격/세금 계산
  shopping_cart_total = calcCartTotal(shopping_cart);
  tax = calcTax(shopping_cart_total);

  // DOM 에 반영
  setCartTotalDOM(shopping_cart_total);
  setTaxDOM(tax);
  updateShippingIcons(shopping_cart, shopping_cart_total, target);
};
// 액션
const play = () => {
  document
    .querySelectorAll("button")
    .forEach((button) =>
      button.addEventListener("click", ({ target }) => handleClick({ target }))
    );
};

export { play };
