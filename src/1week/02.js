const sum = (a, b) => a + b;

// 사실 절차지향적인 코드도 한 번 감싸져있으면 구현부는 어떻게 되어있어도 상관없지만 함수형코드로 변경한다면 다음과 같을 것
function accumulate(arr) {
  return arr.reduce(sum, 0);
}

exports.accumulate = accumulate;
