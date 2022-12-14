var shopping_cart = [];
var shopping_cart_total = 0;

document.querySelectorAll('button').forEach(button =>
  button.addEventListener('click', ({ target }) => {
    const name = target.parentNode.querySelector('.menu-name').textContent;
    const category = target.parentNode.querySelector('.category').textContent;
    const price = target.parentNode.querySelector('.price').textContent;

    add_item_to_cart({ name, category, price });
  }),
);

function add_item_to_cart(item) {
  shopping_cart.push(item);
  console.log(shopping_cart);
  calc_cart_total();
}

function calc_cart_total() {
  shopping_cart_total = 0;
  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];
    shopping_cart_total += item.price;
  }
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

function set_cart_total_dom() {
  document.querySelector('.total-price').textContent = shopping_cart_total;
}

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var item = buy_buttons[i];
    console.log(item);
    if (item.price + shopping_cart_total >= 20) item.show_free_shopping_icon();
    else item.hide_free_shopping_icon();
  }
}

function get_buy_buttons_dom() {
  var buttons = [];

  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];
    item.show_free_shopping_icon = function () {
      console.log('DOM 의 아이콘을 보여줍니다');
    };
    item.hide_free_shopping_icon = function () {
      console.log('DOM 의 아이콘을 숨깁니다');
    };
    buttons.push(item);
  }

  return buttons;
}

function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1);
}

function set_tax_dom(value) {
  document.querySelector('.total-price').textContent = value;
}
