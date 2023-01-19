const animalEmoji = {
  dog: '🐶',
  cat: '🐱',
  frog: '🐸',
  panda: '🐼',
  giraffe: '🦒',
  monkey: '🐵',
  unicorn: '🦄',
  dragon: '🐲',
}
const printMyAnimal = animal => {
  if (animal === 'dog' || animal === 'cat') {
    console.log(`I have a ${animal} ${animalEmoji[animal]}`)
  }
}
printMyAnimal('dog')

const logger =
  callback =>
  (...arg) =>
    console.log(callback(...arg))

const getAnimalDetails = animal => {
  const notExistKey = key => `No animal${key ? ` ${key}` : ''}`
  if (!animal) return notExistKey()
  if (!animal.type) return notExistKey('type')
  if (!animal.name) return notExistKey('name')
  if (!animal.gender) return notExistKey('gender')
  return `${animal.name} is a ${animal.gender} ${animal.type}`
}
const printAnimalDetails = logger(getAnimalDetails)
printAnimalDetails()
printAnimalDetails({ type: 'dog', gender: 'female' })
printAnimalDetails({ type: 'dog', name: 'Lucy' })
printAnimalDetails({ type: 'dog', name: 'Lucy', gender: 'female' })

const colorFruits = {
  red: ['apple', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum'],
}
const getFruits = color => colorFruits[color] ?? []
const printFruits = logger(getFruits)
printFruits(null)
printFruits('yellow')

const getVegetableName = vegetable => {
  if (!vegetable?.name) return 'unknown'
  return vegetable.name
}
const printVegetableName = logger(getVegetableName)
printVegetableName(undefined)
printVegetableName({})
printVegetableName({ name: 'cabbage', quantity: 2 })

const objToFlatArray = (obj, parentKey) =>
  Object.entries(obj).reduce((r, [key, val]) => {
    const flattenedKey = parentKey ? [parentKey, key].join('_') : key
    if (val && val instanceof Object) {
      r.push(...objToFlatArray(val, flattenedKey))
    } else {
      r.push([flattenedKey, val])
    }
    return r
  }, [])
const flatObj = obj => Object.fromEntries(objToFlatArray(obj))

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
}

const printCarDetails = car => {
  const {
    manufacturer_address_number,
    manufacturer_address_state,
    manufacturer_address_street = 'default street',
    manufacturer_name,
    model = 'default model',
  } = flatObj(car)
  console.log(model)

  if (!manufacturer_address_state) return
  console.log(manufacturer_address_street)
  console.log(manufacturer_address_number)

  if (manufacturer_address_street === 'USA') console.log('true')
}
printCarDetails(car)
