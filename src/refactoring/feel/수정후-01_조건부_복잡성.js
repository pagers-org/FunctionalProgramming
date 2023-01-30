const animalMap = {
  dog: '🐶',
  cat: '🐱',
  frog: '🐸',
  panda: '🐼',
  giraffe: '🦒',
  monkey: '🐵',
  unicorn: '🦄',
  dragon: '🐲',
};

const getAnimalEmoji = animal => animalMap[animal];

console.log(getAnimalEmoji('dragon'));

const printMyAnimal = animal => {
  if (animal !== 'dog' && animal !== 'cat') return;

  console.log(`I have a ${animal}`);
};
console.log(printMyAnimal('dog'));

const getAnimalDetails = animal => {
  if (!animal) return 'No animal';
  if (!animal.type) return 'No animal type';
  if (!animal.name) return 'No animal name';
  if (!animal.gender) return 'No animal gender';

  const result = `${animal.name} is a ${animal.gender} ${animal.type}`;

  return result;
};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

const fruitsMap = {
  red: ['apple', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum'],
};

const printFruits = color => fruitsMap[color] || [];

console.log(printFruits(null));
console.log(printFruits('yellow'));

const printVegetableName = vegetable => {
  const string = vegetable?.name || 'unknown';
  console.log(string);
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

const model = car?.model || 'default model';

const street = car?.manufacturer?.address?.street || 'default street';

const phoneNumber = car.manufacturer?.address && car.manufacturer?.phoneNumber;
console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = () => {
  if (car?.manufacturer?.address?.state === 'USA') {
    console.log('true');
  }
};
console.log(isManufacturerFromUSA());
