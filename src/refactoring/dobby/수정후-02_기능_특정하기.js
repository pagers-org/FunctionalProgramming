function afterPrinter(user, phone) {
  console.log("USER PHONE:");
  console.log(`Country code Phone : ${phone.getCountryCode()}`);
  console.log(`Phone: ${phone.getFormatPhone()}\n`);
  console.log("USER DATA:");
  console.log(`User name: ${user.getName()}`);
  console.log(`User lastname: ${user.getLastName()}`);
  console.log(`User DNI: ${user.getDni()}`);
  console.log(`User email: ${user.getPhone()}`);
}

class Phone {
  constructor(unformattedNumber) {
    this.unformattedNumber = unformattedNumber;
  }

  getCountryCode = () => {
    return this.unformattedNumber.substring(0, 3);
  };

  getFormatPhone = () => {
    return `${this.unformattedNumber.substring(
      6,
      9
    )} ${this.unformattedNumber.substring(9, 12)}`;
  };
}

class User {
  constructor(name, lastName, dni, phone, email) {
    this.name = name;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;
    this.phone = `${phone.countryCode} ${phone.areaCode} ${phone.baseNumber}`;
  }

  getName = () => {
    return this.name;
  };

  getLastName = () => {
    return this.lastName;
  };

  getDni = () => {
    return this.dni;
  };

  getPhone = () => {
    return this.phone;
  };
}

const phone1 = new Phone("+34635538973");
const user1 = new User(
  "Fernando",
  "Aparicio Galende",
  "12345678S",
  phone1,
  "fernando.aparicio@guidesmiths.com"
);

afterPrinter(user1, phone1);
