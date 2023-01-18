const per2Int = (value, per) => (value * per) / 100;

const Client = ({ name, type, location }) => {
  this.offers = {
    normal: 0,
    premium: 20,
  };
  this.name = name;
  this.type = type;
  this.location = location;

  getName = () => this.name;
  getType = () => this.name;
  getLocation = () => this.location;
  getPriceByProduct = product => product.getValue() - per2Int(product.getValue(), this.offers[this.type]);

  return {
    getName,
    getType,
    getLocation,
    getPriceByProduct,
  };
};

const Product = ({ value, name, shipping }) => {
  this.value = value;
  this.name = name;
  this.shipping = shipping;

  getValue = () => this.value;
  getProductName = () => this.name;
  getShipping = () => this.shipping;

  return {
    getValue,
    getProductName,
    getShipping,
  };
};

const Order = ({ id, value, client, product }) => {
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
};

const Summary = ({ order }) => {
  this.order = order;

  printSummary = () => {
    let client = order.getClient();
    let product = order.getProduct();
    return `Order: ${order.getId()}
                Client: ${client.getName()}
                Product: ${product.getProductName()}
                TotalAmount: ${client.getPriceByProduct(product) + this.order.getTaxes(client.getLocation())}
                
                
                Arrival in: ${product.getShipping()} days.`;
  };

  return {
    printSummary,
  };
};

const client = Client({
  name: 'Eamon',
  type: 'premium',
  location: 'EU',
});

const product = Product({
  value: 100,
  name: 'Macbook Pro',
  shipping: 3,
});

const order = Order({
  id: 1,
  value: 100,
  client,
  product,
});

const summary = Summary({
  order,
});

console.log(summary.printSummary());
