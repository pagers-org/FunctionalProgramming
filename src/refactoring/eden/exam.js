// 1. 랜덤한 숫자배열에서 짝수 위치는 더하고, 홀수 위치는 곱한 뒤에
// 2의 배수는 t : [...] 에,
// 3의 배수는 h: [...] 에 추가한 뒤
// 객체로 반환해주세요.

const array = [5,1,3,7,8,4,2];

const pipe = (...callbacks)  => (args) => callbacks.reduce((acc, callback) => callback(acc), args);

const forEach = (array, callback) => {
    for(let i = 0; i < array.length; i++){
      let item = array[i];
      callback(item, i, [...array])
    }
};

const map = (array, callback) => {
  const newArray = [];

  forEach(array, (item,i,array) => newArray.push(callback(item, i, array)));
  return newArray;
}

const _map = (callback) => (array) => map(array,callback);

const filter = (array, callback) => {
  const newArray = [];

  forEach(array, (item, i, array)=> callback(item, i, array) && newArray.push(item));
  return newArray;
}

const reduce = (array, callback, initialValue) => {
  let value = initialValue ?? array[0];

  forEach(array, (item, i, array)=> {
    value = callback(value, item, i, array);
  })
  return value;
}

const _reduce = callback => initialValue =>  array => reduce(array, callback, initialValue);

const result2 = pipe()

const result1 = array
    .map((item, i, copy)=> (i+1)%2 === 1 ? item * copy.filter((copyItem, idx) => idx < i && (idx+1)%2 === 1).reduce((a,b)=> a*b,1) : item + copy.filter((copyItem, idx)=> idx < i && (idx+1)%2 === 0).reduce((a,b)=> a+b, 0))
    .reduce((a,b)=> {
    b%2 === 0 && a.t.push(b);
    b%3 === 0 && a.h.push(b);
    return a;
} ,{t:[], h:[]});






// 2. 전, 후 사이 공백이 존재하는 어떤 "문자열" 을 입력 받을 때,
// , 를 기준으로 문자열을 자르고
// 전, 후에 존재하는 공백을 제거하고
// 모든 문자열을 비교하여 중복된 값을 제거하고
// 문자열의 길이 순대로 반환해주세요.





