function multiDimensionalAccumulate(multiDimensionalArr) {
  return multiDimensionalArr.reduce(
    (accumulator, currentArr, index) => accumulator + singleDimensionalAccumulate(currentArr, index),
    0,
  );
}

function singleDimensionalAccumulate(Arr, index) {
  let accumulator = 0;
  const arrCopy = Arr.slice();

  for (let i = 0; i < Arr.length; i++) {
    if (i < index) {
      accumulator += arrCopy[i];
    }
  }
  return accumulator;
}

/**
 * 이 함수는 매개변수로 전달된 multiDimensionalArr를 복사 없이 그대로 참조하고 있습니다.
 * 문제점은 실제로 multiDimensionalArr의 값을 변경하면 부수효과가 나타납니다. (암묵적 입력)
 * 이를 해결하기 위해 multiDimensionalArr을 복사하여 사용하도록 수정할 수도 있습니다.
 * 또한 이중 for문을 사용하고 있습니다. 계산을 더 작게 쪼갤 수 있으므로 'singleDimensionalAccumulate' 함수를 만들어서
 * 역할을 분리했습니다.
 */
exports.multiDimensionalAccumulate = multiDimensionalAccumulate;
