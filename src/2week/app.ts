// ========= 타입선언 =========

type Item = {
  name: string;
  price: string;
};
// ========= 타입선언 =========

let shopping_cart: Item[] = [];

// ========= 액션 =========

const getButtons = (): NodeListOf<Element> =>
  document.querySelectorAll("button");

const add_item_to_cart = (item: Item) => {
  shopping_cart = add_element_last(shopping_cart, item);

  const CART_TOTAL = calc_cart_total(shopping_cart);

  set_text_content_to_dom(
    ".total-price",
    `합계 : ${number_to_KRW(CART_TOTAL)}`
  );
  update_tax_dom(CART_TOTAL);
  update_shipping_icons(shopping_cart);
};

// 각각의 아이템에 대해 무료배송가능한지에 대한 여부를 확인후 아이템에 아이콘을 보여주거나 숨긴다.
const update_shipping_icons = (cart: Item[]) => {
  const $items = get_items_dom();

  for (let i = 0; i < $items.length; i++) {
    const $item = $items[i];

    if (!$item) {
      continue;
    }

    const item = DOM에서_아이템정보_읽어오기($item);
    if (!item) {
      continue;
    }

    const tempCart = add_element_last(cart, item);
    gets_free_shipping(tempCart)
      ? show_free_shopping_icon($item)
      : hide_free_shopping_icon($item);
  }
};

// 아이템 dom 리스트를 반환한다.
const get_items_dom = () => {
  const $buttons = getButtons();
  let $items: ParentNode[] = [];

  for (let i = 0; i < $buttons.length; i++) {
    const $item = $buttons[i].parentNode;
    if ($item) {
      $items = add_element_last($items, $item);
    }
  }

  return $items;
};

// 새금을 구해서 택스 돔을 업데이트함
const update_tax_dom = (total: number) => {
  const totalTax = calc_tax(total, 0.1);
  set_text_content_to_dom(".tax-price", `세금 : ${number_to_KRW(totalTax)}`);
};

const set_text_content_to_dom = (selectors: string, content: string) => {
  const $dom = document.querySelector(selectors);
  if ($dom) {
    $dom.textContent = content;
  }
};

const FREE_SHIPPING_ICON = "free-shopping-icon";

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

const DOM에서_아이템정보_읽어오기 = (
  $parentNode: ParentNode
): Item | undefined => {
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

// ========= 액션 =========

// ========= 계산 =========

const KRW_to_number = (krw: string) => {
  const krwNumber = Number(krw.replace(/[^0-9]+/g, ""));
  return Number.isNaN(krwNumber) ? 0 : krwNumber;
};

const number_to_KRW = (krwNumber: number) => {
  const krw = `${krwNumber.toLocaleString()}원`;
  return krw;
};

const 원화_합계구하기 = (priceList: string[]): number => {
  return priceList
    .map((price) => KRW_to_number(price))
    .reduce((prev, curr) => prev + curr);
};

const calc_tax = (totalPrice: number, taxRate: number) => {
  return totalPrice * taxRate;
};

// 카트의 가격총합계를 구한다.
const calc_cart_total = (cart: Item[]) => {
  const priceList = cart.map((item) => item.price);
  const CART_TOTAL = 원화_합계구하기(priceList);
  return CART_TOTAL;
};

const make_cart_item = (name: string, price: string): Item => ({
  name,
  price,
});

const gets_free_shipping = (cart: Item[]) => calc_cart_total(cart) >= 20000;

const add_element_last = <T>(array: T[], elem: T): T[] => [...array, elem];

// ========= 계산 =========

const init = () => {
  const $buttons = getButtons();
  $buttons.forEach(($button) => {
    return $button.addEventListener("click", () => {
      if (!$button?.parentNode) {
        return;
      }

      const item = DOM에서_아이템정보_읽어오기($button.parentNode);

      if (item) {
        add_item_to_cart(item);
      }
    });
  });
};

init();
