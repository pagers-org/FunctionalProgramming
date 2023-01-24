const per2Int = (value, per) => (value * per) / 100;

const OFFERS = {
  normal: 0,
  premium: 20,
};

const TAXES = {
  EU: 21,
  USA: 14,
};

class Client {
  #name;
  #type;
  #location;

  constructor({ name, type, location }) {
    this.#name = name;
    this.#type = type;
    this.#location = location;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get location() {
    return this.#location;
  }
}

class Product {
  #value;
  #name;
  #shipping;

  constructor({ value, name, shipping }) {
    this.#value = value;
    this.#name = name;
    this.#shipping = shipping;
  }

  get value() {
    return this.#value;
  }

  get name() {
    return this.#name;
  }

  get shipping() {
    return this.#shipping;
  }
}

class Order {
  #id;
  #client;
  #product;

  constructor({ id, client, product }) {
    this.#id = id;
    this.#client = client;
    this.#product = product;
  }

  get orderID() {
    return this.#id;
  }

  get clientName() {
    return this.#client.name;
  }

  get productName() {
    return this.#product.name;
  }

  get productShippingDays() {
    return this.#product.shipping;
  }

  get priceByProduct() {
    return (
      this.#product.value -
      per2Int(this.#product.value, OFFERS[this.#client.type]) +
      OFFERS[this.#client.type] +
      TAXES[this.#client.location]
    );
  }

  printSummary() {
    return `
      OrderID: ${this.orderID}
      Client: ${this.clientName}
      Product: ${this.productName}
      Price: ${this.priceByProduct}
      Arrival in: ${this.productShippingDays} days.
    `;
  }
}

const client = new Client({
  name: "Kay",
  type: "premium",
  location: "USA",
});

const product = new Product({
  name: "에어팟",
  price: "315000",
  shipping: "3",
});

const order = new Order({
  id: "7979",
  client,
  product,
});

order.printSummary();
