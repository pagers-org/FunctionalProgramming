const ANIMAL_TO_EMOJI = {
  dog: '🐶',
  cat: '🐱',
  frog: '🐸',
  panda: '🐼',
  giraffe: '🦒',
  monkey: '🐵',
  unicorn: '🦄',
  dragon: '🐲',
};
const getAnimalEmoji = animal => ANIMAL_TO_EMOJI[animal];
console.log(getAnimalEmoji('dragon'));

const ALLOWED_ANIMALS = ['dog', 'cat'];
const printMyAnimal = animal => {
  if (ALLOWED_ANIMALS.includes(animal)) {
    console.log(`I have a ${animal}`);
  }
};
console.log(printMyAnimal('dog'));

const ANIMAL_KEYS = ['type', 'name', 'gender'];
const getAnimalDetails = animal => {
  let error = 'No animal';
  let invalidKey = '';
  if (!animal) return error;
  if (
    ANIMAL_KEYS.some(key => {
      const isInvalid = !Object.keys(animal).includes(key);
      if (isInvalid) invalidKey = key;
      return isInvalid;
    })
  ) {
    return `${error} ${invalidKey}`;
  }
  return `${animal.name} is a ${animal.gender} ${animal.type}`;
};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

const COLOR_TO_FRUITS = { red: ['apple', 'strawberry'], yellow: ['banana', 'pineapple'], purple: ['grape', 'plum'] };
const printFruits = color => COLOR_TO_FRUITS[color] ?? [];
console.log(printFruits(null));
console.log(printFruits('yellow'));

const printVegetableName = vegetable => {
  if (!vegetable?.name) {
    console.log('unknown');
    return;
  }
  console.log(vegetable.name);
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

// 뭔가 더 잘할 수 있는 방법이 있을텐데...?

const getModel = car => car?.model;
const getManufacturer = car => car?.manufacturer;
const getAddress = manufacturer => manufacturer?.address;
const getStreet = address => address?.street;
const getPhoneNumber = address => address?.phoneNumber;

const model = getModel(car) ?? 'default model';
const street = getStreet(getAddress(getManufacturer(car))) ?? 'default street';

const phoneNumber = getPhoneNumber(getAddress(getManufacturer(car)));
console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = () => {
  if (car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.state === 'USA') {
    console.log('true');
  }
};
console.log(isManufacturerFromUSA());
