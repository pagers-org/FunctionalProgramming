function accumulate(arr) {
  let accumulator = 0;
  const arrCopy = arr.slice();

  for (let i = 0; i < arr.length; i++) {
    accumulator += arrCopy[i];
  }

  return accumulator;
}

function _accumulate(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

/**
 * 이 함수는 매개변수로 전달된 arr를 복사 없이 그대로 참조하고 있습니다.
 * 문제점은 실제로 arr의 값을 변경하면 부수효과가 나타납니다. (암묵적 입력)
 * 이를 해결하기 위해 arr을 복사하여 사용하도록 수정할 수도 있고, 고차함수를 이용해서 해결할 수도 있습니다.
 */
exports.accumulate = accumulate;
