import { calc_KRW_total, number_to_KRW } from "./util.js";
// ========= 타입선언 =========
type Item = {
  name: string;
  price: string;
};
// ========= 타입선언 =========

const FREE_SHIPPING_ICON = "free-shopping-icon";
let shopping_cart: Item[] = [];

// ========= 액션 =========
const get_all_items_button_dom = (): NodeListOf<Element> =>
  document.querySelectorAll("button");

// 아이템 dom 리스트를 반환한다.
const get_items_dom = () => {
  const $buttons = get_all_items_button_dom();
  let $items: ParentNode[] = [];

  for (let i = 0; i < $buttons.length; i++) {
    const $item = $buttons[i].parentNode;
    if ($item) {
      $items = add_element_last($items, $item);
    }
  }

  return $items;
};

const get_item_info_from_dom = ($parentNode: ParentNode): Item | undefined => {
  if (!$parentNode) {
    return;
  }
  const $name = $parentNode.querySelector(".menu-name");
  const $price = $parentNode.querySelector(".price");

  if ($name && $price) {
    const name = $name.textContent;
    const price = $price.textContent;
    if (name && price) {
      const item = make_cart_item(name, price);
      return item;
    }
  }
};

const show_free_shopping_icon = (item: ParentNode) => {
  const icon = item.querySelector(`.${FREE_SHIPPING_ICON}`);
  if (icon) {
    return;
  }
  const span = document.createElement("span");
  span.style.float = "left";
  span.classList.add(FREE_SHIPPING_ICON);
  span.textContent = "🆓 무료배송";
  item.appendChild(span);
};

const hide_free_shopping_icon = (item: ParentNode) => {
  const icon = item.querySelector(`.${FREE_SHIPPING_ICON}`);
  if (icon) {
    item.removeChild(icon);
  }
};

// 각각의 아이템에 대해 무료배송가능한지에 대한 여부를 확인후 아이템에 아이콘을 보여주거나 숨긴다.
const update_shipping_icons = (cart: Item[]) => {
  const $items = get_items_dom();

  for (let i = 0; i < $items.length; i++) {
    const $item = $items[i];
    if (!$item) throw new Error("can not find item dom");

    const item = get_item_info_from_dom($item);
    if (!item) throw new Error("can not get item info");

    const tempCart = add_element_last(cart, item);
    gets_free_shipping(tempCart)
      ? show_free_shopping_icon($item)
      : hide_free_shopping_icon($item);
  }
};

// ========= 액션 =========

// ========= 계산 =========

const calc_total = (cart: Item[]) => {
  const cart_total = calc_cart_total(cart);
  const cart_tax = calc_tax(cart_total, 0.1);

  return cart_total + cart_tax;
};

const add_item_to_cart = (cart: Item[], item: Item) => {
  return add_element_last(cart, item);
};

const make_cart_item = (name: string, price: string): Item => ({
  name,
  price,
});

// 카트의 가격총합계를 구한다.
const calc_cart_total = (cart: Item[]) => {
  const priceList = cart.map((item) => item.price);
  const CART_TOTAL = calc_KRW_total(priceList);
  return CART_TOTAL;
};

const gets_free_shipping = (cart: Item[]) => calc_total(cart) >= 20000;

const add_element_last = <T>(array: T[], elem: T): T[] => [...array, elem];

const calc_tax = (totalPrice: number, taxRate: number) => {
  return totalPrice * taxRate;
};

// ========= 계산 =========

// DOM과 관련된 조작은 이벤트 콜백 함수내에서만 처리해줌
// 1. 버튼 클릭 이벤트 핸들러 등록
// 2. 카트의 총 가격을 구한 뒤 dom 업데이트
// 3. 각 버튼에 대한 free shipping icon 보여주기

const init = () => {
  const $buttons = get_all_items_button_dom();
  $buttons.forEach(($button) => {
    // 1. 버튼 클릭 이벤트 핸들러 등록
    return $button.addEventListener("click", () => {
      if (!$button?.parentNode) {
        return;
      }

      const item = get_item_info_from_dom($button.parentNode);

      if (item) {
        shopping_cart = add_item_to_cart(shopping_cart, item);

        console.log(shopping_cart);
        // 2. 카트의 총 가격을 구한 뒤 dom 업데이트
        const total_price = calc_total(shopping_cart);
        const $dom = document.querySelector(".total-price");
        if ($dom) {
          $dom.textContent = `합계(세금포함) : ${number_to_KRW(total_price)}`;
        }

        // 3. 각 버튼에 대한 free shipping icon 보여주기
        update_shipping_icons(shopping_cart);
      }
    });
  });
};

init();
