const per2Int = (value, per) => (value * per) / 100

const OFFERS = {
  normal: 0,
  premium: 20,
}
const TAXES = {
  EU: 21,
  USA: 14,
}

class Client {
  #name
  #type
  #location
  constructor({ name, type, location }) {
    this.#name = name
    this.#type = type
    this.#location = location
  }
  get name() {
    return this.#name
  }
  get type() {
    return this.#type
  }
  get location() {
    return this.#location
  }
}

class Product {
  #name
  #price
  #shippingDays
  constructor({ name, price, shippingDays }) {
    this.#name = name
    this.#price = price
    this.#shippingDays = shippingDays
  }
  get price() {
    return this.#price
  }
  get name() {
    return this.#name
  }
  get shippingDays() {
    return this.#shippingDays
  }
}

class Order {
  #id
  #client
  #product
  constructor({ id, client, product }) {
    this.#id = id
    this.#client = new Client(client)
    this.#product = new Product(product)
  }
  get clientName() {
    return this.#client.name
  }
  get productName() {
    return this.#product.name
  }
  get productShippingDays() {
    return this.#product.shippingDays
  }
  get totalPrice() {
    return (
      this.#product.price -
      per2Int(this.#product.price, OFFERS[this.#client.type]) +
      TAXES[this.#client.location]
    )
  }
  printSummary() {
    console.log(`OrderID: ${this.#id}
Client: ${this.clientName}
Product: ${this.productName}
TotalPrice: $${this.totalPrice.toLocaleString('en-US')}
Arrival in: ${this.productShippingDays} days.`)
  }
}

const order = new Order({
  id: '1234',
  client: {
    name: '재남',
    type: 'premium',
    location: 'EU',
  },
  product: {
    name: '핸드폰',
    price: 30000,
    shippingDays: 30,
  },
})
order.printSummary()
