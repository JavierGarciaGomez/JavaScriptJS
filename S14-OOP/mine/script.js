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
