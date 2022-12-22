import {
  add,
  sum_array,
  add_element_to_array,
  get_raw_price,
  isPredicatedElement,
  get_element,
} from "./utils";
import { FREE_SHIPPING_PRICE, TAX_SCALE, SELECTOR } from "./constant";

// A
const shopping_cart: Item[] = [];

// A
document.addEventListener("DOMContentLoaded", () => add_item_to_cart_event());

// A
const add_item_to_cart_event = () =>
  document
    .querySelectorAll(SELECTOR.CART_BUTTON)
    .forEach((button) =>
      button.addEventListener("click", ({ target }: any) =>
        add_item_to_cart(get_item_by_button_element(target))
      )
    );

// A
const get_item_by_button_element = (target: Element) => {
  const item_element = get_item_element(target);

  if (!isPredicatedElement(item_element)) {
    throw new Error("There is no item element");
  }

  const name = get_element(item_element, SELECTOR.ITEM_NAME)!
    .textContent as string;
  const category = get_element(item_element, SELECTOR.ITEM_CATEGORY)!
    .textContent as CategoryType;
  const price = get_element(item_element, SELECTOR.ITEM_PRICE)!
    .textContent as string;

  return {
    name,
    category,
    price: get_raw_price(price),
  };
};

// A
const add_item_to_cart = (item: Item) => {
  const next_cart = add_cart_item(shopping_cart, item);
  calc_cart_total(next_cart);
};

// A
const calc_cart_total = (cart: Item[]) => {
  const shopping_cart_total = calc_cart_total_price(cart);
  update_shipping_icons(shopping_cart_total);
  set_cart_total_dom(shopping_cart_total);
  update_tax_dom(shopping_cart_total);
};

// A
const set_cart_total_dom = (cart_total: number) =>
  (document.querySelector(
    SELECTOR.TOTAL_PRICE
  )!.textContent = `${cart_total}원`);

// A
const update_shipping_icons = (cart_total: number) => {
  const buy_buttons = get_buy_buttons_dom();

  for (let i = 0; i < buy_buttons.length; i++) {
    const item: ItemBuyButton = buy_buttons[i];
    const price = get_cart_price(item);
    const next_total = add(cart_total, price);
    gets_free_shipping(next_total, FREE_SHIPPING_PRICE)
      ? item!.show_free_shopping_icon()
      : item!.hide_free_shopping_icon();
  }
};

// A
const get_buy_buttons_dom = () => {
  const buttons: ItemBuyButton[] = [];

  for (let i = 0; i < shopping_cart.length; i++) {
    const item: ItemBuyButton = shopping_cart[i];
    item.show_free_shopping_icon = function () {
      console.log("DOM 의 아이콘을 보여줍니다");
    };
    item.hide_free_shopping_icon = function () {
      console.log("DOM 의 아이콘을 숨깁니다");
    };
    buttons.push(item);
  }

  return buttons;
};

// A
const update_tax_dom = (calc_total: number) => {
  set_tax_dom(calc_total * TAX_SCALE);
};

// A
const set_tax_dom = (value: number) => {
  document.querySelector(".total-price")!.textContent = String(value);
};

// A
const get_item_element = (target: Element) => target.closest(".item");

// C - shipping
export const gets_free_shipping = (
  addedPrice: number,
  freeShippingPrice: number
) => addedPrice >= freeShippingPrice;

// C - cart
export const get_cart_price_list = (cart: Item[]) =>
  cart.map((item: Item) => get_cart_price(item));

// C - cart
export const get_cart_price = <T extends { price: number }>({ price }: T) =>
  price;

// C - cart
export const calc_cart_total_price = (cart: Item[]) =>
  sum_array(get_cart_price_list(cart));

// C - cart
export const add_cart_item = (cart: Item[], item: Item) =>
  add_element_to_array(cart, item);
