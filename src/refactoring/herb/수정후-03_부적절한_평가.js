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

    get name() { 
        return this.#name;
    }

    get type() { 
        return this.#type;
    }

    get location() {
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

    get id() {
        return this.#id;
    }

    get value() {
        return this.#value;
    }

    get client() {
        return this.#client;
    }

    get product() {
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
    console.log('client name : ',client.name);
    console.log('client type :', client.type);
    console.log('client location :', client.location);
    console.log('client priceByProduct :', client.getPriceByProduct(product.value));
}

const printProductInfo = (product) => {
    console.log('---------------Product Info-----------------');
    console.log('product value : ', product.value);
    console.log('product Name : ', product.name);
    console.log('product shipping : ', product.shipping);
}

const printOrderInfo = (order) => {
    console.log('----------------Order Info----------------');
    console.log('order id : ', order.id);
    console.log('order value :', order.value);
    console.log('order client :', order.client.name);
    console.log('order product :', order.product.name);
    console.log('total Amount :', order.client.getPriceByProduct(order.product.value) + order.getTaxes(order.client.location));
}

printClientInfo(client, product)
printProductInfo(product);
printOrderInfo(order);

