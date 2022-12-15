import renderProducts from './renderProducts'
import { CartItem, Product } from './types'

const useState = <T>(initialState: T): [() => T, (arg: ((prev: T) => T)) => T] => {
  let _state: T = initialState
  return [
    () => _state,
    arg => {
      _state = arg(_state)
      return _state
    }
  ]
}

const [getCartState, setCartState] = useState<CartItem[]>([])
const products = renderProducts()

const isFreeShipping = (product: Product, total: number) => product.price + total >= 20000
const getCartTotal = () => getCartState().reduce((res, item) => res + item.price, 0)
const getTotalTax = (total: number) => total * 0.1
const addItemToCart = (item: CartItem) => setCartState(prev => [...prev, item])

const updateDOM = () => {
  const cartTotal = getCartTotal()
  document.querySelector('.total-price')!.textContent = cartTotal.toLocaleString('ko-KR') + '원'
  document.querySelector('.total-tax')!.textContent = getTotalTax(cartTotal).toLocaleString('ko-KR') + '원'
  products.forEach(product => {
    if (product.elem) {
      product.elem.classList.toggle('free', isFreeShipping(product, cartTotal));
    }
  })
}
const handleClick = (e: Event) => {
  const tg = e.target as HTMLElement;
  if (tg.localName !== 'button') return
  const $item = tg.closest('.item') as HTMLElement;
  const product = products.find(p => p.elem === $item)
  if (product) {
    addItemToCart({ name: product.name, category: product.category, price: product.price })
    console.log(getCartState())
    updateDOM()
  }
}
const clearCart = () => {
  setCartState(() => [])
  updateDOM()
}

document.querySelector('.items')!.addEventListener('click', handleClick)
document.querySelector('.clear')!.addEventListener('click', clearCart)

export {
  isFreeShipping,
  getCartTotal,
  getTotalTax,
}
