for (var i = 0; i < foods.length; i++) {
  var food = foods[i];
  cook(food);
  eat(food);
}

for (var i = 0; i < dishes.length; i++) {
  var dish = dishes[i];
  wash(dish);
  dry(dish);
  putAway(dish);
}

// 리팩토링 사고의 흐름
// 1. 반복문을 돌면서 각 요소마다 특정 동작을 반복하는게 핵심. 
// 2. forEach 등을 쓰면 되겠지만 새로 만든다면?
// 3. callback 함수를 받도록 하면 여러가지 동작도 실행할 수 있을 같음.


const forEach = (array, callback) => {
  for(let i = 0; i < array.length; i++){
    let item = array[i];
    callback(item, i, [...array])
  }
}

// 요구사항
// forEach 구현하기 => 일급추상을 잘 이용해보기
