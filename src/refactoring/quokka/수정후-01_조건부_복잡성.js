const AnimalEmoji = {
  dog: '🐶',
  cat: '🐱',
  frog: '🐸',
  panda: '🐼',
  giraffe: '🦒',
  monkey: '🐵',
  unicorn: '🦄',
  dragon: '🐲',
};

console.log(AnimalEmoji['dragon']);

const myAnimal = ['dog', 'cat'];

const printMyAnimal = animal => {
  if (myAnimal.includes(animal)) {
    console.log(`I have a ${animal}`);
  }
};
console.log(printMyAnimal('dog'));

const getDataItem = (data, item, callback) => {
  const valid = item ? data[item] : data;

  if (valid) {
    return callback();
  } else {
    return item ? `No animal ${item}` : `No animal`;
  }
};

const getAnimalDetails = animal => {
  const result = getDataItem(animal, null, () => {
    return getDataItem(animal, 'type', () => {
      return getDataItem(animal, 'name', () => {
        return getDataItem(animal, 'gender', () => {
          return `${animal.name} is a ${animal.gender} ${animal.type}`;
        });
      });
    });
  });

  return result;
};

console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

const Fruits = {
  red: ['apple', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum'],
};

const printData = (data, key, returnValue) => {
  if (data && data[key]) {
    return data[key];
  }
  return returnValue;
};

const printFruits = color => {
  return printData(Fruits, color, []);
};

console.log(printFruits(null));
console.log(printFruits('yellow'));

const printVegetableName = vegetable => {
  return printData(vegetable, 'name', 'unknown');
};

printVegetableName(undefined);
printVegetableName({});
printVegetableName({ name: 'cabbage', quantity: 2 });

const objHasKey = (obj, key) => {
  if (key in obj) {
    //FIXME: umm..
  }

  return obj[key] ? obj[key] : `default ${key.slice(-1)[0]}`;
};

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

const model = objHasKey(car, ['model']);
const street = objHasKey(car, ['street']);

// const street =
//   (car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.street) || 'default street';

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

module.exports = {
  getAnimalDetails,
  printFruits,
  printVegetableName,
  model,
  street,
  phoneNumber,
};
