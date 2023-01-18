const per2Int = (value, per) => (value * per) / 100;

/**
 * 주문자는 오로지 자기자신에 대한 정보만 알고 있어야 하므로 productPrice를 계산하는 메서드는 불필요한 요소이므로 product로 옮겼다.
 * */
function Client({ name, type, location }) {
  this.offers = {
    normal: 0,
    premium: 20,
  };
  this.name = name;
  this.type = type;
  this.location = location;

  getName = () => this.name;
  getLocation = () => this.location;
  getDiscountRate = () => this.offers[this.type];
  return {
    getName,
    getLocation,
    getDiscountRate,
  };
}

/**
 * product 의 가격은 product.value 와 client 의 등급에 따라 달라진다.
 * (client의 등급이 premium이면 20% 할인받는 형태)
 * 이때 price계산에 client 를 의존하게 하면 client와 product 사이의 강한 결합이 생기므로 client를 직접 받는것이 아니라 discountRate:number를 받게 하므로써
 * 느슨한 결합인 관계로 재구성하였다.
 * */
function Product({ value, name, shipping }) {
  this.value = value;
  this.name = name;
  this.shipping = shipping;

  getName = () => this.name;
  getShipping = () => this.shipping;
  calcPriceByDiscountRate = discountRate => this.value - per2Int(this.value, discountRate);

  return {
    getName,
    getShipping,
    calcPriceByDiscountRate,
  };
}

/**
 * Summary에서 가지고 있던 다양한 역할을 order로 내렸다.
 * */
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
  productShipping = () => this.product.getShipping();
  getClientName = () => this.client.getName();
  getProductName = () => this.product.getName();
  getTotalAmount = () =>
    this.product.calcPriceByDiscountRate(this.client.getDiscountRate()) + this.taxes[this.client.getLocation()];
  return {
    getId,
    productShipping,
    getClientName,
    getProductName,
    getTotalAmount,
  };
}

function Summary({ order }) {
  this.order = order;

  printSummary = () => {
    return `Order: ${this.order.getId()}
                Client: ${this.order.getClientName()}
                Product: ${this.order.getProductName()}
                TotalAmount: ${this.order.getTotalAmount()}
                Arrival in: ${this.order.productShipping()} days.`;
  };

  return {
    printSummary,
  };
}

module.exports = {
  Client,
  Product,
  Order,
  Summary,
};
