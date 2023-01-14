const ANIMAL_MAP = {
  dog: '🐶',
  cat: '🐱',
  frog: '🐸',
  panda: '🐼',
  giraffe: '🦒',
  monkey: '🐵',
  unicorn: '🦄',
  dragon: '🐲',
};

const getAnimalEmoji = animal => ANIMAL_MAP[animal];

console.log(getAnimalEmoji('dragon'));

const myAnimals = ['dog', 'cat'];
const hasIn = (arr, item) => arr.includes(item);
const printMyAnimal = myAnimals => animal => {
  if (hasIn(myAnimals, animal)) {
    console.log(`I have a ${animal}`);
  }
};
console.log(printMyAnimal(myAnimals)('dog'));

const getAnimalDetails = animal => {
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

const COLOR_MAP = {
  red: ['apple', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum'],
};

COLOR_MAP.default = [];

const printFruits = color => {
  return COLOR_MAP[color] ?? COLOR_MAP.default;
};
console.log(printFruits(null));
console.log(printFruits('yellow'));

const printVegetableName = vegetable => {
  if (vegetable && vegetable.name) {
    console.log(vegetable.name);
  } else {
    console.log('unknown');
  }
};
printVegetableName(undefined);
printVegetableName({});
printVegetableName({ name: 'cabbage', quantity: 2 });

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

const model = (car && car.model) || 'default model';

const street =
  (car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.street) || 'default street';

const phoneNumber = car && car.manufacturer && car.manufacturer.address && car.manufacturer.phoneNumber;
console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = () => {
  if (car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.state === 'USA') {
    console.log('true');
  }
};
console.log(isManufacturerFromUSA());
