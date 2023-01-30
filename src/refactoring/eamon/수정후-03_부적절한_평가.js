const per2Int = (value, per) => (value * per) / 100;

const Client = ({ name, type, location }) => {
  this.offers = {
    normal: 0,
    premium: 20,
  };

  getName = () => name;
  getType = () => type;
  getLocation = () => location;
  getPriceByProduct = product => product.getValue() - per2Int(product.getValue(), this.offers[this.type]);

  return {
    getName,
    getType,
    getLocation,
    getPriceByProduct,
  };
};

const Product = ({ value, name, shipping }) => {
  getValue = () => value;
  getProductName = () => name;
  getShipping = () => shipping;

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

  getId = () => id;
  getValue = () => value;
  getClient = () => client;
  getProduct = () => product;
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

    console.log(client.name, product.name, client.getName());
    client.name = 'Test';
    product.name = 'Test';

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
console.log(order.getClient().getName());
const summary = Summary({
  order,
});

console.log(summary.printSummary());
