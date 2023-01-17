const foods = ['피자', '치킨', '햄버거'];

// forEach
const myForeach = (array, callback) => {
  let i = 0;
  while (i < array.length) {
    callback(array[i++]);
  }
};

myForeach(foods, food => console.log(`${food} 먹는다`));
