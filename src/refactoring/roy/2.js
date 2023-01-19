const slicer = (str, count) => {
  if (str.length < count) return str
  const [curr, next] = [str.slice(0, count), str.slice(count)]
  return [curr, ...slicer(next, count)]
}

class Phone {
  #number
  constructor(number) {
    this.#number = slicer(number, 3)
  }
  get countryCode() {
    return this.#number[0]
  }
  get areaCode() {
    return this.#number[1]
  }
  get baseNumber() {
    return `${this.#number[2]} ${this.#number[3]}`
  }
  get formattedNumber() {
    return `${this.#number[1]}-${this.#number[2]}-${this.#number[3]}`
  }
}

class User {
  #name
  #lastName
  #dni
  #email
  #phone
  constructor(name, lastName, dni, phone, email) {
    this.#name = name
    this.#lastName = lastName
    this.#dni = dni
    this.#email = email
    this.#phone = new Phone(phone)
  }
  get name() {
    return this.#name
  }
  get lastName() {
    return this.#lastName
  }
  get dni() {
    return this.#dni
  }
  get email() {
    return this.#email
  }
  get phone() {
    return this.#phone
  }
}
const user1 = new User(
  'Fernando',
  'Aparicio Galende',
  '12345678S',
  '+34635538973',
  'fernando.aparicio@guidesmiths.com',
)

function printUserInfo(user) {
  console.log('USER PHONE:')
  console.log(`Country code Phone : ${user.phone.countryCode}`)
  console.log(`Phone: ${user.phone.formattedNumber}\n`)
  console.log('USER DATA:')
  console.log(`User name: ${user.name}`)
  console.log(`User lastname: ${user.lastName}`)
  console.log(`User DNI: ${user.dni}`)
  console.log(`User email: ${user.email}`)
}

printUserInfo(user1)
