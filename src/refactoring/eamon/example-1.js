// 1. 우선 fieldName 을 받아서 변경하는 함수를 만들어보자.
// 2. 그리고 fieldList 들을 받아서 방어적인 코드를 추가해보자.

function setFieldNameByIdentifierGenerator(fieldList) {
  return function ({ cart, identifier, field, fieldName }) {
    if (!fieldList.includes(identifier)) {
      new Error('Invalid field name');
    }

    const item = cart[identifier];
    const newItem = objectSet(item, fieldName, field);
    const newCart = objectSet(cart, identifier, newItem);
    return newCart;
  };
}
// fieldList 는 바깥에서 선언해주어 핸들링하는게 좋겠다.
const FIELD_LIST = ['name', 'price', 'ship', 'tax', 'quant'];

const setFieldNameByIdentifier = setFieldNameByIdentifierGenerator(FIELD_LIST);

function setPriceByName(cart, name, price) {
  return setFieldNameByIdentifier({
    cart,
    identifier: name,
    fieldName: 'ship',
    field: price,
  });
}

function setShippingByName(cart, name, ship) {
  return setFieldNameByIdentifier({
    cart,
    identifier: name,
    fieldName: 'ship',
    field: ship,
  });
}

function setQuantityByName(cart, name, quant) {
  return setFieldNameByIdentifier({
    cart,
    identifier: name,
    fieldName: 'ship',
    field: quant,
  });
}

function setTaxByName(cart, name, tax) {
  return setFieldNameByIdentifier({
    cart,
    identifier: name,
    fieldName: 'tax',
    field: tax,
  });
}

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}
