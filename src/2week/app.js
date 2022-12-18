var shopping_cart = [];
var shopping_cart_total = 0;

// 1. 계산을 꺼내기
// 2. 방어적 복사
// 3. 유틸리티, 스키마, 비지니스 로직

// 계산
const add_item_to_cart = (cart, item) => [...cart, item];
const isFreeShopping = (total, price) => total >= price;
const getPriceWithTax = (total) => Math.floor(total * 1.1);
const calcTotal = (cart) => cart.reduce((acc, item) => acc + item.price, 0);
const get_buy_buttons_dom = (cart) =>
  cart.map((item) => ({
    ...item,
    show_free_shopping_icon() {
      console.log("DOM 의 아이콘을 보여줍니다");
    },
    hide_free_shopping_icon() {
      console.log("DOM 의 아이콘을 숨깁니다");
    },
  }));

const setShopingCart = (cart) => {
  shopping_cart = cart;
};

document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", ({ target }) => {
    const name = target.parentNode.querySelector(".menu-name").textContent;
    const category = target.parentNode.querySelector(".category").textContent;
    const price = Number(
      target.parentNode
        .querySelector(".price")
        .textContent.replace("원", "")
        .replace(",", "")
    );
    const cart = add_item_to_cart(shopping_cart, { name, category, price });
    setShopingCart(cart);
    console.log(cart);
    calc_cart_total(cart);
  })
);

const calc_cart_total = (cart) => {
  const total = calcTotal(cart);
  const priceWithTax = getPriceWithTax(total);
  set_cart_total_dom(priceWithTax);
  update_shipping_icons(cart, total);
};

function set_cart_total_dom(total) {
  document.querySelector(".total-price").textContent = total;
}

function update_shipping_icons(cart, total) {
  var buy_buttons = get_buy_buttons_dom(cart);
  for (var i = 0; i < buy_buttons.length; i++) {
    var item = buy_buttons[i];
    console.log(item);
    console.log(total);
    if (isFreeShopping(total, 2000)) item.show_free_shopping_icon();
    else item.hide_free_shopping_icon();
  }
}

function set_tax_dom(value) {
  document.querySelector(".total-price").textContent = value;
}
