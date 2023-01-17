/*
  0. objectSet => setObject / var => const / function => arrow function
  1. 반복 코드부터 정의
  --- 여기까지 실습 때의 생각 흐름 ---
  2. 아직 존재하는 중복 코드 정리
  3. 사용 예시 추가
  4. 정리한 중복 코드도 다 동일한 내용 => 다시 정리
*/

/**
 * @param {object} cart
 * @param {string} name
 * @param {string} key
 * @param {*} value
 * @returns {object}
 */
const setKeyByName = (cart, name, key, value) => {
  const item = { ...cart[name], [key]: value };
  const newCart = { ...cart, [name]: item };

  return newCart;
};

// 사용 예시
// "오놀의 랜덤 요리"가 담긴 객체에서 "한식"에 대한 정보를 수정한다는 가정
const cart = {
  korean: {
    desc: '오늘 한식은 비빔밥',
  },
  japanese: {
    desc: '오늘 일식은 초밥',
  },
};
const NAME = 'korean';

const cartAddedPrice = setKeyByName(cart, NAME, 'price', 5000);
const cartAddedShipping = setKeyByName(cartAddedPrice, NAME, 'shipping', '당일 배송');
const cartAddedQuantity = setKeyByName(cartAddedShipping, NAME, 'quantity', 50);
const cartAddedTax = setKeyByName(cartAddedQuantity, NAME, 'tax', 1000);

// { korean: { desc: '오늘 한식은 비빔밥' }, japanese: { desc: '오늘 일식은 초밥' } }
console.log(cart);
// {
//   korean: { desc: '오늘 한식은 비빔밥', price: 5000 },
//   japanese: { desc: '오늘 일식은 초밥' }
// }
console.log(cartAddedPrice);
// {
//   korean: { desc: '오늘 한식은 비빔밥', price: 5000, shipping: '당일 배송' },
//   japanese: { desc: '오늘 일식은 초밥' }
// }
console.log(cartAddedShipping);
// {
//   korean: { desc: '오늘 한식은 비빔밥', price: 5000, shipping: '당일 배송', quantity: 50 },
//   japanese: { desc: '오늘 일식은 초밥' }
// }
console.log(cartAddedQuantity);
// {
//   korean: {
//     desc: '오늘 한식은 비빔밥',
//     price: 5000,
//     shipping: '당일 배송',
//     quantity: 50,
//     tax: 1000
//   },
//   japanese: { desc: '오늘 일식은 초밥' }
// }
console.log(cartAddedTax);
