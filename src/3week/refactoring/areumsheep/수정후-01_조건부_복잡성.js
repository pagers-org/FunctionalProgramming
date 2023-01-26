// 동물에 맞는 이모티콘 출력
const getAnimalEmoji = (animal) => {
  const EMOJI_ANIMAL = {
    dog: '🐶',
    cat: '🐱',
    frog: '🐸',
    panda: '🐼',
    giraffe: '🦒',
    monkey: '🐵',
    unicorn: '🦄',
    dragon: '🐲',
  };
  return EMOJI_ANIMAL[animal];
};
console.log(getAnimalEmoji('dragon'));

// dog, cat인 경우 문장 출력
const printMyAnimal = (animal) => {
  if (animal === 'dog' || animal === 'cat') {
    return `I have a ${animal}`;
  }
  return "I don't have a animal";
};
console.log(printMyAnimal('dog'));

// 동물 정보 출력
const getAnimalDetails = (animal) => {
  if (!animal) {
    return 'No animal';
  }
  if (!animal.type) {
    return 'No animal type';
  }
  if (!animal.name) {
    return 'No animal name';
  }
  if (!animal.gender) {
    return 'No animal gender';
  }
  return `${animal.name} is a ${animal.gender} ${animal.type}`;
};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

// 과일 색 출력
const printFruits = (color = []) => {
  switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
  }
};
console.log(printFruits(null));
console.log(printFruits('yellow'));

// 야채 이름 출력
const printVegetableName = (vegetable) => {
  if (!(vegetable && vegetable.name)) {
    console.log('unknown');
    return;
  }
  console.log(vegetable.name);
};
printVegetableName(undefined);
printVegetableName({});
printVegetableName({ name: 'cabbage', quantity: 2 });

// 자동차 프로퍼티 확인
const car = {
  model: 'Fiesta',
  manufacturer: {
    name: 'Ford',
    address: {
      street: 'Some Street Name',
      number: '5555',
      state: 'USA',
    },
  },
};

const model = car?.model || 'default model';
const street = car?.manufacturer?.address?.street || 'default street';
const phoneNumber = car?.manufacturer?.address && car?.manufacturer?.phoneNumber;

console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = () => {
  console.log(car?.manufacturer?.address?.state === 'USA');
};
console.log(isManufacturerFromUSA());