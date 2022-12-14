const {
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
} = require('./p67.js')

it('현재 상품에 의해 20을 넘기는지', () => {
  expect(isTotalOverBias(10, 10)).toBe(true)
  expect(isTotalOverBias(5, 10)).toBe(false)
})

it('택스계산', () => {
  expect(calc_tax(100)).toBe(10)
  expect(calc_tax(200)).toBe(20)
})

it('토탈계산', () => {
  expect(getTotalPrice([{ price: 10 }, { price: 20 }, { price: 30 }])).toBe(60)
})

it('카트추가', () => {
  let cart = [
    { name: '1', price: 10 },
    { name: '2', price: 20 },
    { name: '3', price: 30 },
  ]

  expect(add_item(cart, '4', 40).length).toBe(4)
  expect(add_item(cart, '5', 50).length).toBe(4)

  cart = add_item(cart, '4', 40)
  expect(cart.length).toBe(4)

  cart = add_item(cart, '5', 50)
  expect(cart.length).toBe(5)
})

it('택스계산', () => {
  expect(
    get_tax([
      { name: '1', price: 10 },
      { name: '2', price: 20 },
      { name: '3', price: 30 },
    ]),
  ).toBe(6)
})
