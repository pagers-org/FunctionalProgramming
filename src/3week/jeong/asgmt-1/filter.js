// 기존 메소드
nums = [1, 2, 3, 4, 5];
const filter = nums.filter((el) => el < 3);

console.log(filter);

console.log("--------------");
// 직접 구현 함수
const _filter = (arr, fn) => {
  const newArr = [];

  for (var i = 0; i < arr.length; i++) {
    const condition = fn(arr[i], i, ...arr);
    if (condition) newArr.push(arr[i]);
  }

  return newArr;
};

exports._filter = _filter;
