const getAnimalEmoji = (animal, findFn) => {
  return findFn(animal);
};

const emojiMap = {
  dog: "🐶",
  cat: "🐱",
  frog: "🐸",
  panda: "🐼",
  giraffe: "🦒",
  monkey: "🐵",
  unicorn: "🦄",
  dragon: "🐲",
};

console.log(
  // 고차함수를 만드는게 과제의 목표였을까요?...
  getAnimalEmoji("dragon", function (animal) {
    return emojiMap[animal];
  })
);

const getAnimalDetails = (animal) => {
  let result;

  if (animal) {
    if (animal.type) {
      if (animal.name) {
        if (animal.gender) {
          result = `${animal.name} is a ${animal.gender} ${animal.type}`;
        } else {
          result = "No animal gender";
        }
      } else {
        result = "No animal name";
      }
    } else {
      result = "No animal type";
    }
  } else {
    result = "No animal";
  }

  return result;
};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: "dog", gender: "female" }));
console.log(getAnimalDetails({ type: "dog", name: "Lucy" }));
console.log(getAnimalDetails({ type: "dog", name: "Lucy", gender: "female" }));

const animalMap = {
  dog: "dog",
  cat: "cat",
};
const has = (testObj, key) => Object.keys(testObj).includes(key);
// const printMyAnimal = (animal) => {
//   if (animalType.includes(animal)) {
//     console.log(`I have a ${animal}`);
//   }
// };
// console.log(printMyAnimal("dog"));
const print = (testArr, key, fn) => {
  if (has(testArr, key)) {
    return fn(key);
  }
};
// console.log(printMyAnimal("dog"));

// 프린트니까 콘솔까지는 들어가도 괜찮은것인가...
console.log(
  print(animalMap, "dog", function (key) {
    console.log(`I have a ${key}`);
  })
);

const fruitMap = {
  red: ["apple", "strawberry"],
  yellow: ["banana", "pineapple"],
  purple: ["grape", "plum"],
};

console.log(
  print(fruitMap, "yellow", function (key) {
    return fruitMap[key];
  })
);

// const printFruits = (color) => {
//   switch (color) {
//     case "red":
//       return ["apple", "strawberry"];
//     case "yellow":
//       return ["banana", "pineapple"];
//     case "purple":
//       return ["grape", "plum"];
//     default:
//       return [];
//   }
// };
// console.log(printFruits(null));
// console.log(printFruits("yellow"));

const printVegetableName = (vegetable) => {
  if (vegetable && vegetable.name) {
    console.log(vegetable.name);
  } else {
    console.log("unknown");
  }
};
printVegetableName(undefined);
printVegetableName({});
printVegetableName({ name: "cabbage", quantity: 2 });

const car = {
  model: "Fiesta",
  manufacturer: {
    name: "Ford",
    address: {
      street: "Some Street Name",
      number: "5555",
      state: "USA",
    },
  },
};

const model = (car && car.model) || "default model";

const street =
  (car &&
    car.manufacturer &&
    car.manufacturer.address &&
    car.manufacturer.address.street) ||
  "default street";

const phoneNumber =
  car &&
  car.manufacturer &&
  car.manufacturer.address &&
  car.manufacturer.phoneNumber;
console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = () => {
  if (
    car &&
    car.manufacturer &&
    car.manufacturer.address &&
    car.manufacturer.address.state === "USA"
  ) {
    console.log("true");
  }
};
console.log(isManufacturerFromUSA());

// get, print 라는 함수들이 냄새가 나버림
// get 계열
// 1. getAnimalEmoji 전달된 인자를 통해 아이콘 맵핑 후 리턴
// 2. getAnimalDetails 전달된 객체를 순회하며 type , name , gender를 찍어줌
// print 계열
// 1. printMyAnimal 'dog' || 'cat' 일 경우
// 2. printFruits
// 3. printVegetableName

// car 맥락은 파악을 해보자

// 뭘해야하는것인지 모르곘다...
