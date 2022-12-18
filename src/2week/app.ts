// 데이터
import { ShoppingCart } from "./types/type";
import { GetNumbersOnString } from "./utils/getNumbersOnString";

let shoppingCart: ShoppingCart[] = [];
const setShoppingCart = (newShoppingCart: ShoppingCart[]) => {
  shoppingCart = newShoppingCart;
};

// const [shoppingCart, setShoppingCart] = State<Array<ShoppingCart>>([]);
const TAX_RATE = 0.1;

// 클릭 액션
document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", ({ target }) => {
    const name =
      (target as Node).parentNode?.querySelector(".menu-name")?.textContent ||
      "";
    const category =
      (target as Node).parentNode?.querySelector(".category")?.textContent ||
      "";
    const price = GetNumbersOnString(
      (target as Node).parentNode?.querySelector(".price")?.textContent || ""
    );

    setShoppingCart(addItemToCart({ name, category, price }));
    handleDomUpdate();
  })
);

const addItemOnArray = <T>(array: T[], item: T): T[] => [...array, item];
const getTotalFromArrayOfObject = <T>(array: T[], element: keyof T) =>
  array.reduce((acc, cur) => acc + (cur[`${element}`] as any), 0);

const addItemToCart = (cartItem: ShoppingCart) =>
  addItemOnArray<ShoppingCart>(shoppingCart, cartItem);

const addShowOrHideShoppingIconOnArray = <T>(array: T[]) =>
  array.map((item) => ({
    ...item,
    showFreeShoppingIcon: () => {
      console.log("DOM 의 아이콘을 보여줍니다");
    },
    hideFreeShoppingIcon: () => {
      console.log("DOM 의 아이콘을 숨깁니다");
    },
  }));

const handleDomUpdate = () => {
  const shoppingCartPriceTotal = getTotalFromArrayOfObject<ShoppingCart>(
    shoppingCart,
    "price"
  );

  setCartTotalDom(shoppingCartPriceTotal);
  updateShippingIcons(shoppingCartPriceTotal);
  updateTaxDom(shoppingCartPriceTotal);
};

const updateShippingIcons = (shoppingCartPriceTotal: number) => {
  const buyButtons =
    addShowOrHideShoppingIconOnArray<ShoppingCart>(shoppingCart);

  buyButtons.forEach((buyButton) => {
    if (buyButton.price + shoppingCartPriceTotal >= 20) {
      buyButton.showFreeShoppingIcon();
    } else {
      buyButton.hideFreeShoppingIcon();
    }
  });
};

// dom을 변경하는 로직
const updateTaxDom = (shoppingCartTotal: number) =>
  setTaxDom(updateTax(shoppingCartTotal));
const updateTax = (price: number): number => price * TAX_RATE;
const setTaxDom = (tax: number) => {
  (
    document.querySelector(".total-tax") as HTMLElement
  ).textContent = `${tax}원₩`;
};

const setCartTotalDom = (shoppingCartTotal: number) => {
  (
    document.querySelector(".total-price") as HTMLElement
  ).textContent = `${shoppingCartTotal}원`;
};
