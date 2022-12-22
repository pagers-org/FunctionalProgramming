let shopping_cart = [];

//A dom update, 전역변수 사용
document.querySelectorAll("button").forEach((button) =>
  button.addEventListener("click", ({ target }) => {
    const name = target.parentNode.querySelector(".menu-name").textContent;
    const category = target.parentNode.querySelector(".category").textContent;
    const price = target.parentNode.querySelector(".price").textContent;
    shopping_cart = add_item_to_cart(shopping_cart, {
      name,
      category,
      price,
    });
    const total_price = calc_cart_total_price(shopping_cart);
    set_cart_total_dom(total_price);
    set_tax_dom(total_price)
    update_shipping_icons(total_price);
  })
);

// A dom update
const set_cart_total_dom = (cart_total) => {
  document.querySelector(".total-price").textContent = `total-price: ${cart_total}원`;
};

// A dom update
const set_tax_dom = (cart_total) => {
  document.querySelector(".total-tax").textContent = `tax: ${update_tax(
    cart_total
  )}원`;
}

// A dom update
const update_shipping_icons = (cart_total) => {
  const free_shipping_icon = HTMLCollection_convert_to_array(get_buy_button_dom())
  const all_price = get_all_price();
      all_price.map((itemPrice,idx) => {
        if(gets_free_shipping(add(cart_total,itemPrice), FREE_SHIPPING_PRICE)) {
          free_shipping_icon[idx].style = 'visibility: visible'
        }
      })
};

// A dom 읽음
const get_all_price = () => {
  const all_price_dom = HTMLCollection_convert_to_array(document.querySelectorAll(".price"))
  const all_price = []
  all_price_dom.map((item) =>all_price.push(convert_string_to_number(item.textContent)))
  return all_price
}

// A dom 읽음
const get_buy_button_dom = () => document.getElementsByClassName("free-shipping");

// C - business logic - tax
const update_tax = (calc_total) => calc_total * TAX_SCALE;

// C - business logic - shipping
const gets_free_shipping = (addedPrice, freeShippingPrice) =>
  addedPrice >= freeShippingPrice;

// C - cart.price
const get_cart_price_list = (cart) => cart.map((item) => get_cart_price(item));
const get_cart_price = ({ price }) => convert_string_to_number(price);
const convert_string_to_number = (str) => parseInt(str.replaceAll(",", ""));

// C - cart
const add_item = (cart, item) => add_element_to_array(cart, item);
// C -cart
const add_item_to_cart = (cart, item) => add_item(cart, item);
// C - cart
const calc_cart_total_price = (cart) => sum_array(get_cart_price_list(cart));
// C - util
const HTMLCollection_convert_to_array = (collection) => [...collection]
// C - util
const sum_array = (numArray) => numArray.reduce(add, 0);
// C - util
const add_element_to_array = (array, element) => [...array, element];
// C - util
const add = (num1, num2) => num1 + num2;

// D
const FREE_SHIPPING_PRICE = 20000;
const TAX_SCALE = 0.1;
