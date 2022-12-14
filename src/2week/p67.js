let shopping_cart = []
const BIAS_THRESHOLD = 20
const TAX = 0.1

// 계산
const isTotalOverBias = (totalAmount, price) => price + totalAmount >= BIAS_THRESHOLD
const calc_tax = cart_total => cart_total * TAX
const getTotalPrice = cart => {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i]
    total += item.price
  }
  return total
}
const add_item = (cart, name, price) => [
  ...cart,
  {
    name,
    price,
  },
]
const get_tax = cart => calc_tax(getTotalPrice(cart))

// 액션
const add_item_to_cart = (name, price) => {
  shopping_cart = add_item(shopping_cart, name, price)
  set_cart_dom()
}
const update_shipping_icons = () => {
  let buy_buttons = get_buy_buttons_dom()
  toggleIcons(buy_buttons)
}
const toggleIcons = buy_buttons => {
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i]
    let item = button.item
    if (isTotalOverBias(shopping_cart_total, item.price)) {
      button.show_free_shipping_icon()
    } else {
      button.hide_free_shipping_icon()
    }
  }
}

const update_tax = () => {
  set_tax_dom(get_tax(shopping_cart))
}

const set_cart_dom = () => {
  set_cart_total_dom()
  update_shipping_icons()
  update_tax()
}

module.exports = {
  isTotalOverBias,
  calc_tax,
  getTotalPrice,
  add_item,
  get_tax,
  add_item_to_cart,
  update_shipping_icons,
  toggleIcons,
  update_tax,
  set_cart_dom,
}
