var shopping_cart = [];
var shopping_cart_total = 0;

const set_cart_total_dom = () => {};

const get_buy_buttons_dom = () => {};

const set_tax_dom = () => {};

// 다른 팀에서도 사용할 수 있도록 값을 리턴하도록 변경
function add_item_to_cart(cart, name, price) {
  const copy = cart.slice();
  copy.push({
    name: name,
    price: price,
  });
  return copy;
}

// 배열에 아이템을 추가하는 저수준의 함수를 작성.
const add_item_to_array = (array, item) => {
  const copy = array.slice();
  copy.push(item);
  return copy;
};

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    if (item.price + shopping_cart_total >= 20) {
      button.show_free_shipping_icon();
    } else {
      button.hide_free_shipping_icon();
    }
  }
}

function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1);
}

function calc_cart_total(cart) {
  let shopping_cart_total = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    shopping_cart_total += item.price;
  }

  return shopping_cart_total;
}

const render = (total) => {
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
};

const update_total = () => {
  render(total);
};

exports.add_item_to_array = add_item_to_array;
exports.calc_cart_total = calc_cart_total;
