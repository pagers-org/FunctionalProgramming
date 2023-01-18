const getAnimalEmoji = animal => {
  if (animal === 'dog') {
    return '🐶';
  }
  if (animal === 'cat') {
    return '🐱';
  }
  if (animal === 'frog') {
    return '🐸';
  }
  if (animal === 'panda') {
    return '🐼';
  }
  if (animal === 'giraffe') {
    return '🦒';
  }
  if (animal === 'monkey') {
    return '🐵';
  }
  if (animal === 'unicorn') {
    return '🦄';
  }
  if (animal === 'dragon') {
    return '🐲';
  }

  return 'unknown';
};
console.log(getAnimalEmoji('dragon'));

const printMyAnimal = animal => {
  if (animal !== 'dog' || animal !== 'cat') {
    return;
  }

  console.log(`I have a ${animal}`);
};
console.log(printMyAnimal('dog'));

const getAnimalDetails = animal => {
  let result;

  if (!animal) return 'No animal';

  if (!animal.type) return 'No animal type';
  if (!animal.name) return 'No animal name';
  if (!animal.gender) return 'No animal gender';

  result = `${animal.name} is a ${animal.gender} ${animal.type}`;

  return result;
};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

const printFruits = color => {
  const FRUITS = {
    red: ['apple', 'strawberry'],
    yellow: ['banana', 'pineapple'],
    purple: ['grape', 'plum'],
  };

  if (!color || FRUITS[color]) return [];

  return FRUITS[color];
};

console.log(printFruits(null));
console.log(printFruits('yellow'));

const printVegetableName = vegetable => {
  if (!vegetable || !vegetable.name) {
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

const model = (car && car.model) || 'default model';

const street =
  (car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.street) || 'default street';

const phoneNumber = car && car.manufacturer && car.manufacturer.address && car.manufacturer.phoneNumber;

console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = car => {
  if (car && car.manufacturer && car.manufacturer.address && car.manufacturer.address.state === 'USA') {
    console.log('true');
  }
};

console.log(isManufacturerFromUSA());
