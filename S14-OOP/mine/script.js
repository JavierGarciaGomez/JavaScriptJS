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
};
const javier = new Person('Javier', 1985);

// 1. New{} is created
// 2. funcion is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
console.log(javier, matilda);
