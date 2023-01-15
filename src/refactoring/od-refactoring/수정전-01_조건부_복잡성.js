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
};
console.log(getAnimalEmoji('dragon'));

const printMyAnimal = animal => {
  if (animal === 'dog' || animal === 'cat') {
    console.log(`I have a ${animal}`);
  }

};
console.log(printMyAnimal('dog'));

const getAnimalDetails = animal => {

  if (animal == null || animal == undefined || animal == {}) {
    return 'No animal';
  }
  if (animal.type == null || animal.type == undefined || animal.type == "") {
    return 'No animal type';
  }
  if (animal.name == null || animal.name == undefined || animal.name == "") { 
    return 'No animal name';
  }

  if (animal.gender == null || animal.gender == undefined || animal.gender == "") { 
    return 'No animal gender';
  }

  return `${animal.name} is a ${animal.gender} ${animal.type}`;

};
console.log(getAnimalDetails());
console.log(getAnimalDetails({ type: 'dog', gender: 'female' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy' }));
console.log(getAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' }));

const printFruits = color => {
  switch (color) {
    case 'red':
      return ['apple', 'strawberry'];
    case 'yellow':
      return ['banana', 'pineapple'];
    case 'purple':
      return ['grape', 'plum'];
    default:
      return [];
  }
};
console.log(printFruits(null));
console.log(printFruits('yellow'));

const printVegetableName = vegetable =>
  vegetable?.name ? console.log(vegetable.name) : console.log('unknown');

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

const model = (car?.model) || 'default model';

const street = (car?.manufacturer?.address?.street) || 'default street';

const phoneNumber = car?.manufacturer?.phoneNumber;
console.log(model);
console.log(street);
console.log(phoneNumber);

const isManufacturerFromUSA = () => {
  if (car?.manufacturer?.address?.state === 'USA') {
    console.log('true');
  }
};
console.log(isManufacturerFromUSA());
