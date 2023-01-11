// 반복문이 비슷한 형태로 반복된다

const myForeach = (callback, array) => {
  let i = 0;
  while (i < array.length) {
    callback(array[i++]);
  }
};
myForeach(food => console.log(`${food} 먹는다`), ['피자', '치킨', '햄버거']);
myForeach(dish => console.log(`${dish} 닦는다`), ['접시1', '접시2']);
