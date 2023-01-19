const per2Int = (value, per) => (value * per) / 100;

const Client = ({ name, type, location }) => {
  this.name = name;
  this.type = type;
  this.location = location;

  getName = () => this.name;
  getType = () => this.type;
  getLocation = () => this.location;

  return {
    getName,
    getType,
    getLocation,
    getPriceByProduct,
  };
};

const Product = ({ value, name, shipping }) => {
  this.offers = {
    normal: 0,
    premium: 20,
  };
  this.value = value;
  this.name = name;
  this.shipping = shipping;

  getValue = () => this.value;
  getProductName = () => this.name;
  getShipping = () => this.shipping;
  getPriceByProduct = clientType => this.value - per2Int(this.value, this.offers[clientType]);

  return {
    getValue,
    getProductName,
    getShipping,
    getPriceByProduct,
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
    let client = this.order.getClient();
    let product = this.order.getProduct();

    return `Order: ${this.order.getId()}
                Client: ${client.getName()}
                Product: ${product.getProductName()}
                TotalAmount: ${product.getPriceByProduct(client.getType()) + this.order.getTaxes(client.getLocation())}
                
                
                Arrival in: ${product.getShipping()} days.`;
  };

  return {
    printSummary,
  };
};
