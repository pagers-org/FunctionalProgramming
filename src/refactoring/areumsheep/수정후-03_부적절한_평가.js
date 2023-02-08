const per2Int = (value, per) => (value * per) / 100;

const Client = ({ name, type, location }) => {
  const rate = Object.freeze({
    normal: 0,
    premium: 20,
  });
  this.name = name;
  this.type = type;
  this.location = location;
  
  getName = () => this.name;
  getLocation = () => this.location;
  getTypeByRate = () => rate[this.type];

  return {
    getName,
    getLocation,
    getTypeByRate,
  };
};

const Product = ({ value, title, shipping }) => {
  this.value = value;
  this.title = title;
  this.shipping = shipping;

  getValue = () => this.value;
  getTitle = () => this.title;
  getShipping = () => this.shipping;
  getPrice = (rate) => this.value - per2Int(this.value, rate);

  return {
    getValue,
    getTitle,
    getShipping,
    getPrice,
  };
};

const Order = ({ id, value, client, product }) => {
  const taxes = Object.freeze({
    EU: 21,
    USA: 14,
  });
  this.id = id;
  this.value = value;
  this.client = client;
  this.product = product;
  
  getId = () => this.id;
  getValue = () => this.value;
  getClientName = () => this.client.getName();
  getProductName = () => this.product.getTitle();
  getShipping = () => this.product.getShipping();
  getTotalPriceByLocation = () =>
    this.product.getPrice(this.client.getTypeByRate()) +
    taxes[this.client.getLocation()];

  return {
    getId,
    getValue,
    getClientName,
    getProductName,
    getShipping,
    getTotalPriceByLocation,
  };
};

const Print = () => {
  printSummary = ({ order }) => {
    return `Order: ${order.getId()}
            Client: ${order.getClientName()}
            Product: ${order.getProductName()}
            TotalAmount: ${order.getTotalPriceByLocation()}
            
            Arrival in: ${order.getShipping()}`;
  };

  return {
    printSummary,
  };
};


const product = Product({ value: 10000, title: 'product', shipping: 123 });
const client = Client({ name: 'areumsheep7', type: 'normal', location: 'EU' });
const order = Order({
  id: '000123',
  value: 3000,
  client,
  product,
});

const print = Print();

console.log(print.printSummary({ order }));
