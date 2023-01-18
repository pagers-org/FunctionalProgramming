const per2Int = (value, per) => (value * per) / 100;

function Client({ name, type, location }) {
  this.offers = {
    normal: 0,
    premium: 20,
  };
  this.name = name;
  this.type = type;
  this.location = location;

  // 생성자 함수에서 this는 생성자함수가 생성할 인스턴스를 가리킨다.
  this.getName = () => this.name;
  this.getType = () => this.name;
  this.getLocation = () => this.location;
  this.getPriceByProduct = (product) =>
    product.getValue() - per2Int(product.getValue(), this.offers[this.type]);
}

function Product({ value, name, shipping }) {
  this.value = value;
  this.name = name;
  this.shipping = shipping;

  // 생성자 함수에서 this는 생성자함수가 생성할 인스턴스를 가리킨다.
  this.getValue = () => this.value;
  this.getProductName = () => this.name;
  this.getShipping = () => this.shipping;
}

function Order({ id, value, client, product }) {
  this.taxes = {
    EU: 21,
    USA: 14,
  };
  this.id = id;
  this.value = value;
  this.client = client;
  this.product = product;

  // 생성자 함수에서 this는 생성자함수가 생성할 인스턴스를 가리킨다.
  this.getId = () => this.id;
  this.getValue = () => this.value;
  this.getClient = () => this.client;
  this.getProduct = () => this.product;
  this.getTaxes = (loc) => this.taxes[loc];
}

const Summary = ({ order }) => {
  printSummary = () => {
    let client = order.client;
    let product = order.product;

    return `Order: ${order.getId()}
                Client: ${client.getName()}
                Product: ${product.getProductName()}
                TotalAmount: ${
                  client.getPriceByProduct(product) +
                  order.getTaxes(client.getLocation())
                }

                Arrival in: ${product.getShipping()} days.`;
  };

  return {
    printSummary,
  };
};

const client1 = new Client({
  name: "고객1",
  type: "premium",
  location: "USA",
});

const product1 = new Product({ value: 5000, name: "김밥", shipping: "5" });

const order1 = new Order({
  id: 1,
  value: 2000,
  client: client1,
  product: product1,
});

console.log(Summary({ order: order1 }).printSummary());
