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
  getType = () => this.type;
  getLocation = () => this.location;
  getPriceByProduct = product => product.value - per2Int(product.value, this.offers[this.type]);

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
const mockProduct = {
  value: 100,
  name: 'shirts',
  shipping: 5,
};
const client1 = Client({ name: 'siny', type: 'premium', location: 'USA' });
const product1 = Product(mockProduct);
const order1 = Order({
  id: '1',
  value: '???',
  product: product1,
  client: client1,
});

const summary = Summary({ order: order1 });

console.log(summary.printSummary());
