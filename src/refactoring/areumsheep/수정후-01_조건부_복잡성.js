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
