const per2Int = (value, per) => (value * per) / 100;
class Client {
    #name
    #type
    #location
    #offers = {
        normal : 0, 
        premium : 20,
    }

    constructor(name, type, location) { 
        this.#name = name;
        this.#type = type;
        this.#location = location;
    }

    get getName() { 
        return this.#name;
    }

    get getType() { 
        return this.#type;
    }

    get getLocation() {
        return this.#location;
    }

    getPriceByProduct(productValue) {
        const per = this.#offers[this.#type];
        return productValue - per2Int(productValue, per);
    }
}
class Product { 
    #value
    #name
    #shipping

    constructor(value, name, shipping) { 
        this.#value = value;
        this.#name = name;
        this.#shipping = shipping;
    }

    get getValue() {
        return this.#value;
    }

    get getName() {
        return this.#name;
    }

    get getShipping() {
        return this.#shipping;
    }
}

class Order { 
    #id
    #value
    #client
    #product
    #taxes = {
        EU : 21,
        USA : 14,
    }

    constructor(id, value, client, product) {
        this.#id = id;
        this.#value = value;
        this.#client = client;
        this.#product = product;
    }

    get getId() {
        return this.#id;
    }

    get getValue() {
        return this.#value;
    }

    get getClient() {
        return this.#client;
    }

    get getProduct() {
        return this.#product;
    }

    getTaxes (location) {
        return this.#taxes[location]
    }
}

const client = new Client('heomin', 'normal', 'USA')
const product = new Product(24000, '삼다수 24개입', 2);
const order = new Order(1, 24000, client, product);

const printClientInfo = (client, product) => {
    console.log('---------------Client Info---------------');
    console.log('client name : ',client.getName);
    console.log('client type :', client.getType);
    console.log('client location :', client.getLocation);
    console.log('client priceByProduct :', client.getPriceByProduct(product.getValue));
}

const printProductInfo = (product) => {
    console.log('---------------Product Info-----------------');
    console.log('product value : ', product.getValue);
    console.log('product Name : ', product.getName);
    console.log('product shipping : ', product.getShipping);
}

const printOrderInfo = (order) => {
    console.log('----------------Order Info----------------');
    console.log('order id : ', order.getId);
    console.log('order value :', order.getValue);
    console.log('order client :', order.getClient.getName);
    console.log('order product :', order.getProduct.getName);
    console.log('total Amount :', order.getClient.getPriceByProduct(order.getProduct.getValue) + order.getTaxes(order.getClient.getLocation));
}

printClientInfo(client, product)
printProductInfo(product);
printOrderInfo(order);

