'use strict';

console.log("********** 201 What's OOP **********");
/**
 * OOP is a paradigm based on the concept of objects
 * We use objects to model real world or abstract features
 * ABSTRACTION
 * ENCAPSULATION
 * INHERITANCE
 * POLYMORPHISM
 */

console.log('********** 202 OOP in JavaScript **********');

/**PROTOTYPES
 * Contains methods and prototypes
 * Prototypal inheritance
 *
 * HOW DO WE CREATE OBJECTS WITHOUT HAVING CLASSESS?
 * 1-Constructor functions
 * 2-ES6 classes
 * 3-Object.create()
 */

console.log(
  '********** 203 Constructor functions and the new OPERATOR **********'
);

const Person = function (firstName, birthYear) {
  (this.firstName = firstName), (this.birthYear = birthYear);
  // this is bad practice, is better to use prototypes
  /*  this.calcAge = function () {
    const thisYear = new Date().getFullYear();
    return thisYear - birthYear;
  };*/
};
const javier = new Person('Javier', 1985);

// 1. New{} is created
// 2. funcion is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
console.log(javier, matilda);
console.log(matilda instanceof Person);
// console.log(matilda.calcAge());

console.log('********** 204 Prototypes **********');
console.log(Person.prototype);
// addin methods
Person.prototype.calcAge = function () {
  const thisYear = new Date().getFullYear();
  return thisYear - this.birthYear;
};

console.log(matilda.calcAge());
console.log(Person.prototype);
// Accessing the prototype of an instance
console.log(javier.__proto__);
console.log(javier.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(javier));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(javier, javier.species);

console.log('hasOwnProperty firstName', javier.hasOwnProperty('firstName'));
// false because is not really on javier object, but has access of the person prototype
console.log('hasOwnProperty species', javier.hasOwnProperty('species'));

console.log(
  '********** 205 Prototypal inheritance and prototype chain **********'
);

console.log(
  '********** 206 Prototypal inheritance on built-in objects **********'
);
console.log('+++++Prototype inheritance+++++');
console.log(javier.__proto__);
console.log('going up in the prot chain: object', javier.__proto__.__proto__);
console.log(
  'going up in the prot chain: null',
  javier.__proto__.__proto__.__proto__
);
console.log('Constructor property Person', Person.prototype.constructor);
console.log('Constructor property Person', javier.__proto__.constructor);
console.log('+++++ Array prototype +++++');
const array = [3, 6, 7, 6, 7, 3];
console.log('Array prototype', array.__proto__);
// adding a method to Array prototype (generally not a good idea)
Array.prototype.getUnique = function () {
  return [...new Set(this)];
};
console.log('own method to Array', array.getUnique());

console.log('+++++ DOM elements +++++');
const h1 = document.querySelector('h1');
console.dir(h1.__proto__);
console.dir(h1.__proto__.__proto__);
console.dir(h1.__proto__.__proto__.__proto__);
console.dir(h1.__proto__.__proto__.__proto__.__proto__);
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__);
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);

console.log('+++++ Functions +++++');
const myFunction = x => x + 1;
console.dir(myFunction);
console.dir(myFunction.__proto__);
console.dir(myFunction.__proto__.__proto__);

console.log('********** 207 Coding challenge #1 **********');
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

const myCar = new Car('Mercedes', 100);
Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.brake = function () {
  this.speed -= 5;
};

console.log(myCar);
myCar.accelerate();
console.log(myCar);
myCar.brake();
console.log(myCar);

console.log('********** 208 ES6 Classes **********');
// class expression
const PersonCLExp = class {};
// class declaration
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const javier2 = new PersonCL('Javier García', 1985);
console.log(javier2);
console.log(javier2.calcAge());

PersonCL.prototype.printName = function () {
  return this.firstName;
};

console.log(javier2.printName());
/**Things to have in mind
 * 1. Classes are NOT hoisted
 * 2. Classes are first-class citizen (we can pass it into functions and return them from functions)
 * 3. Classes are execute in strict mode
 *
 *
 */

console.log('********** 209 getters and setters **********');
const account = {
  owner: 'Javier',
  movements: [200, 300, 120, 400],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(movement) {
    this.movements.push(movement);
  },

  get onwer() {
    return this.owner;
  },
};

console.log(account.latest);
account.latest = 5000;
console.log(account.latest);
console.log(account.owner);

console.log('********** 210 static methods **********');
// The are on the constructor not in the object, for example
Number.parseFloat(12);
// 12.parseFloat();

// Create a static method
Person.hey = function () {
  console.log('Hey there');
};

Person.hey();
// javier.hey();
PersonCL.hey();

console.log('********** 211 Object create **********');
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

console.log('********** 212 Coding challenge # 2 **********');
/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Car2 {
  constructor(make, speed) {
    (this.make = make), (this.speed = speed);
  }
  accelerate() {
    this.speed += 10;
  }
  break() {
    this.break -= 5;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const myCar2 = new Car2('Toyota', 100);
myCar2.accelerate();
console.log(myCar2);
console.log(myCar2.speedUS);
console.log((myCar2.speedUS = 50));
console.log(myCar2.speed);

console.log('********** 213 Inheritance between classes **********');
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.define = function () {
  return `${this.firstName} studies ${this.course}`;
};

const student = new Student('Mike', 2000, 'Computer Science');
console.log(student);
console.log(student.define());
console.log(student.calcAge());

console.dir(student.__proto__);
console.dir(student.__proto__.__proto__);

console.log(student instanceof Student);
console.log(student instanceof Person);

console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

console.log('********** 214 Coding challenge 3 **********');
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}`
  );
};

const ev = new EV('Toyota', 100, 20);
ev.chargeBattery(100);
console.log(ev);
ev.accelerate();

console.log('********** 215 Inheritance between classes ES6 **********');

class StudentCL extends PersonCL {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

console.log(
  '********** 216 Inheritance between classes Object.create **********'
);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Compuetr Science');
jay.introduce();
jay.calcAge();

console.log(
  '********** 217 Inheritance between classes Object.create **********'
);
console.log('********** 218 Encapsulation **********');

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // protected property (fake encapsulation)
    this._movements = [];
    this.locale = navigator.language;
  }

  getMovements() {
    return this._movements;
  }

  deposit(amount) {
    this._movements.push(amount);
  }
  withdraw(amount) {
    this.deposit(-amount);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(100);
acc1.withdraw(200);
acc1.requestLoan(100);
console.log(acc1);
console.log(acc1.getMovements());

console.log('********** 219 Encapsulation (proposal) **********');
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account2 {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc2 = new Account2('Jonas', 'EUR', 1111);

// acc2._movements.push(250);
// acc2._movements.push(-140);
// acc2.approveLoan(1000);

acc2.deposit(250);
acc2.withdraw(140);
acc2.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account2.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

console.log('********** 220 Chaining methods **********');
// Chaining
acc2.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc2.getMovements());

console.log('********** 221 Summary **********');

console.log('********** 222 Coding challenge 4 **********');
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
