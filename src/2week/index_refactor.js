/****************************************************************************
 *
 *                                  DATA
 *
 ***************************************************************************/
var shopping_cart = [];
var shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  shopping_cart.push({
    name: name,
    price: price,
  });

  calc_cart_total();
}

function calc_cart_total() {
  shopping_cart_total = 0;

  for (var i = 0; i < shopping_cart.length; i++) {
    var item = shopping_cart[i];

    shopping_cart_total += item.price;
  }

  // NOTE 의미 상 필요한 함수 :: 장바구니 내 총액을 화면에 표시하는 함수
  set_cart_total_dom();
  update_shipping_icons();
  // NOTE 의미 상 필요한 함수 :: 총액에 대한 세금을 화면에 표시하는 함수
  update_tax_dom();
}

function update_shipping_icons() {
  // NOTE 의미 상 필요한 함수 :: 돔 조작을 위한 함수
  var buy_buttons = get_buy_buttons_dom();

  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;

    if (item.price + shopping_cart_total >= 20) {
      // NOTE 의미 상 필요한 함수 :: 공짜 아이콘을 버튼 옆에 보여준다.
      button.show_free_shipping_icon();
    } else {
      // NOTE 의미 상 필요한 함수 :: 공짜 아이콘을 버튼 옆에서 숨켜준다.
      button.hide_free_shipping_icon();
    }
  }
}

function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1);
}
