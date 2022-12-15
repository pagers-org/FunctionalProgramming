type Item = {
  name: string;
  category: string;
  price: number;
};

let shopping_cart: Item[] = [];
let shopping_cart_total: number = 0;

const numerize = (price: string) =>
  Number(
    price
      .split("")
      .filter((num) => !isNaN(Number(num)))
      .join("")
  );

const add_item_to_cart = (item: Item, shopping_cart: Item[]) => {
  const copyItem = { ...item };

  shopping_cart.push(copyItem);

  return shopping_cart;
};

const calc_cart_total = (shopping_cart: Item[]) => {
  let shopping_cart_total = 0;

  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    shopping_cart_total += item.price;
  }

  return shopping_cart_total;
};

const set_cart_total_dom = (shopping_cart_total: number) => {
  document.querySelector(".total-price").textContent =
    JSON.stringify(shopping_cart_total); //전역변수 대신 인자를 사용한다.
};

const update_shipping_icons = (
  shopping_cart: Item[],
  shopping_cart_total: number
) => {
  var buy_buttons = set_buy_buttons(shopping_cart);
  for (let i = 0; i < buy_buttons.length; i++) {
    let item = buy_buttons[i];
    if (item.price + shopping_cart_total >= 20) item.show_free_shopping_icon();
    else item.hide_free_shopping_icon();
  }
};

const set_buy_buttons = (shopping_cart: Item[]) => {
  const buttons = [];

  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
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

const update_tax_dom = (shopping_cart_total: number) => {
  set_tax_dom(shopping_cart_total * 0.1);
};

const set_tax_dom = (shopping_cart_total: number) => {
  document.querySelector(".total-price").textContent =
    JSON.stringify(shopping_cart_total);
};

const addItemToCart = () => {
  document.querySelectorAll("button").forEach((button) =>
    button.addEventListener("click", ({ target }) => {
      const name = target.parentNode.querySelector(".menu-name").textContent;
      const category = target.parentNode.querySelector(".category").textContent;
      let price = target.parentNode.querySelector(".price").textContent;

      //계산
      price = numerize(price);
      shopping_cart = add_item_to_cart(
        { name, category, price },
        shopping_cart
      );
      shopping_cart_total = calc_cart_total(shopping_cart);

      //액션
      set_cart_total_dom(shopping_cart_total);
      update_shipping_icons(shopping_cart, shopping_cart_total);
      update_tax_dom(shopping_cart_total);
    })
  );
};

export { addItemToCart };
