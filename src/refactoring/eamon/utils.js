// 커링을 이용해서 함수를 만들어 보았는데 사용하는데 있어서 더 불편할 수도 있겠다라는 생각도 들었습니다.
// 이런 함수들이 커링이 필요한가? 라는 생각도 들었습니다.
// 파이프 함수를 만들어서 이용한다면 유용할 수도 있겠다고 생각이 들었습니다.

const _forEach = callback => array => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, [...array]);
  }
};

const _map = callback => array => {
  const result = [];
  _forEach((item, idx, copy) => result.push(callback(item, idx, copy)))(array);
  return result;
};

const _filter = callback => array => {
  const result = [];
  _forEach((item, idx, copy) => {
    if (callback(item, idx, copy)) {
      result.push(item);
    }
  })(array);
  return result;
};

const _reduce = (callback, initialValue) => array => {
  let acc = initialValue ?? array[0];
  _forEach((item, idx, copy) => {
    if (idx === 0 && initialValue === undefined) return;
    acc = callback(acc, item, idx, copy);
  })(array);
  return acc;
};

const _pipe =
  (...functions) =>
  initialValue => {
    return _reduce((acc, func) => func(acc), initialValue)(functions);
  };

_pipe(
  _reduce((acc, i) => acc + i),
  console.log,
)([1, 2, 3, 4]);

module.exports = { _forEach, _map, _filter, _reduce, _pipe };
