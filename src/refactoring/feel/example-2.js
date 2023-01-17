const foods = ['피자', '치킨', '햄버거'];
const fruits = [
  { name: '사과', price: 500 },
  { name: '바나나', price: 700 },
  { name: '수박', price: 1000 },
];

// forEach
const myForeach = (array, callback) => {
  let i = 0;
  while (i < array.length) {
    callback(array[i++]);
  }
};

myForeach(foods, food => console.log(`${food} 먹는다`));

// map
const myMap = (array, callback) => {
  const result = [];
  myForeach(array, item => {
    const part = callback(item);
    result.push(part);
  });

  return result;
};

const resultMap = myMap(fruits, fruit => fruit.name);
// [ '사과', '바나나', '수박' ]
console.log(resultMap);

// filter
const myFilter = (array, callback) => {
  const result = [];
  myForeach(array, item => {
    if (callback(item)) {
      result.push(item);
    }
  });

  return result;
};

const resultFilter = myFilter(fruits, fruit => fruit.price > 600);
// [ { name: '바나나', price: 700 }, { name: '수박', price: 1000 } ]
console.log(resultFilter);
