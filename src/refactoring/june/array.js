/**
 * @param {T[]} arr 반복문을 실행할 배열
 * @param {(value:T, index: number, arr: T[])} callback 배열의 각 원소를 가지고 실행할 콜백 함수
 */
const forEach = (arr, callback) => {
  if (!Object.prototype.hasOwnProperty.call(arr, 'length')) throw '배열이 아님!';
  let index = 0;
  while (index < arr.length) {
    const current = arr[index];
    callback(current, index, arr);
    index += 1;
  }
};

/**
 * @param {T[]} arr 반복문을 실행할 배열
 * @param {(value:T, index: number, arr: T[]) => U} callback 새로운 배열 요소를 생성하는 함수.
 * @return {U[]}
 */
const map = (arr, callback) => {
  const mappedArr = [];
  forEach(arr, (value, index, originalArr) => mappedArr.push(callback(value, index, originalArr)));
  return mappedArr;
};

/**
 * @param {T[]} arr 반복문을 실행할 배열
 * @param {(value:T, index: number, arr: T[]) => boolean} callback 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버립니다.
 * @return {T[]}
 */
const filter = (arr, callback) => {
  const filteredArr = [];
  const filterHandler = (value, index, originalArr) => {
    if (callback(value, index, originalArr)) {
      filteredArr.push(value);
    }
  };
  forEach(arr, filterHandler);
  return filteredArr;
};

/**
 * @param {T[]} arr 반복문을 실행할 배열
 * @param {(accumulator:U, current:T, currentIndex: number, arr: T[]) => U} callback 각 요소를 consume할 reducer function
 * @param {U=} initialValue callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생합니다.
 * @return {U}
 */
const reduce = (arr, callback, initialValue) => {
  if (initialValue === undefined && arr.length === 0) throw '초기값없이 빈 배열로 reduce를 수행할 수 없습니다.';
  let result = initialValue ?? arr[0];

  forEach(arr, (value, index, arr) => {
    result = callback(result, value, index, arr);
  });
  return result;
};

module.exports = {
  map,
  filter,
  reduce,
};
