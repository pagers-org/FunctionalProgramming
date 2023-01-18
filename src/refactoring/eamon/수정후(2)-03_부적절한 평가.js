// 이 부분에 있어서는 Client, Product, Order, Summary 가 각각 생성자 함수로 작동하면 더 좋지 않을까 라는 생각도 해보았습니다.
// 그러나 생성자 함수로 name 이라는 프로퍼티에 직접 접근하게되면 기존의 name 을 변경할 수 있게 되어 위험했습니다.

const per2Int = (value, per) => (value * per) / 100;

function Client({ name, type, location }) {
  this.offers = {
    normal: 0,
    premium: 20,
  };
  this.name = name;
  this.type = type;
  this.location = location;
}

Client.prototype.getName = function () {
  return this.name;
};

Client.prototype.getPriceByProduct = function (product) {
  return product.getValue() - per2Int(product.getValue(), this.offers[this.type]);
};

Client.prototype.getLocation = function () {
  return this.location;
};

function Product({ value, name, shipping }) {
  this.value = value;
  this.name = name;
  this.shipping = shipping;
}

Product.prototype.getValue = function () {
  return this.value;
};

Product.prototype.getProductName = function () {
  return this.name;
};

Product.prototype.getShipping = function () {
  return this.shipping;
};

function Order({ id, value, client, product }) {
  this.taxes = {
    EU: 21,
    USA: 14,
  };
  this.id = id;
  this.value = value;
  this.client = client;
  this.product = product;

  getId = () => this.id;
  getValue = () => this.value;
  getClient = () => this.client;
  getProduct = () => this.product;
  getTaxes = loc => this.taxes[loc];

  return {
    getId,
    getValue,
    getClient,
    getProduct,
    getTaxes,
  };
}
Order.prototype.getId = function () {
  return this.id;
};
Order.prototype.getValue = function () {
  return this.value;
};
Order.prototype.getClient = function () {
  return this.client;
};
Order.prototype.getProduct = function () {
  return this.product;
};
Order.prototype.getTaxes = function (loc) {
  return this.taxes[loc];
};

const Summary = ({ order }) => {
  this.order = order;

  printSummary = () => {
    let client = order.getClient();
    let product = order.getProduct();

    client.name = 'Test';
    product.name = 'Test';

    return `Order: ${order.getId()}
                  Client: ${client.getName()}
                  Product: ${product.name}
                  TotalAmount: ${client.getPriceByProduct(product) + this.order.getTaxes(client.getLocation())}
                  
                  
                  Arrival in: ${product.getShipping()} days.`;
  };

  return {
    printSummary,
  };
};

const client = new Client({
    name: 'Eamon',
    type: 'premium',
    location: 'EU',
  }),
  product = new Product({
    value: 100,
    name: 'Macbook',
    shipping: 3,
  }),
  order = new Order({
    id: 1,
    value: 100,
    client: client,
    product: product,
  }),
  summary = Summary({ order: order });

console.log(summary.printSummary());
