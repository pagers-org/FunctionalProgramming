let cart = {};
const validItemFields = ["price", "quantity", "shipping", "tax"];
const translations = { qunatity: "number" };

function setFieldByName(cart, name, field, value) {
  if (!validItemFields.includes(field)) {
    throw "not a valid item field: " + "'" + field + "'";
  }
  if (translations.hasOwnProperty(field)) field = translations[field];

  const item = cart[name];
  const newItem = objectSet(item, field, value);
  const newCart = objectSet(cart, name, newItem);

  return newCart;
}

cart = setFieldByName(cart, "shoe", "price", 13);
cart = setFieldByName(cart, "shoe", "quantity", 3);
cart = setFieldByName(cart, "shoe", "shipping", 0);
cart = setFieldByName(cart, "shoe", "tax", 2.34);

/**
 * 접근: 리팩토링 전 함수는 함수 이름과 특정 문자열을 제외하고 모두 비슷하게 생겼습니다.
 * 리팩토링: 1) 함수 이름 대신 인자(문자열)로 받을 수 있도록 바꿔주었습니다.
 *         2) 가드문을 넣어 오타로 인한 버그를 방지해주었습니다.
 *         3) 차후 api 변경을 용이하게 하기 위해 translation 변수를 추가하였습니다.
 */
