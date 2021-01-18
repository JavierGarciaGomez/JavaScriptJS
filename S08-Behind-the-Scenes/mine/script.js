'use strict';

/**
 * 89 A high level overview of JavaScript
 * 
 * JS is high level.
 *      Low level, like C (developer has to manage the resources manually)
 *      High level, like JavaScript (Developer doesnt have to worry, everythinh happens automatically)
 * JS has garbage collector
 * JS is interpreted or just in time compiled 
 * JS is multiparadigm (paradigms: procedural programming, OOP and functional programming)
 * JS is prototype based
 * JS is first class functions (functions are treated as variables)
 * JS is dynamic (dynamically typing)
 * JS is single-threaded 
 * JS is non-blocking event loop
 */

/**
  * 90 JavaScript Engine and Runtime
  * JS Engine program that executes JavaScript Code
  * Example Google V8 Engine
  * 
  * Every engine has a CALL STACK and an ENGINE
  * CALL STACK
  *     where our code is executed
  * HEAP
  *     where objects are stored
  *     objects in memory
  * 
  * COMPUTER SCIENCE SIDE NOTE: COMPILATION VS INTERPRETATION
  *     Compilation
  *     Source code ----(compilation) ----> Portable file machine code -----(Execution)----> program running
  * 
  *     Interpretation
  *     Source code ----(execution line by line) ---->  program running
  * 
  * 
  * SO NOW is not just an interpreted language, but a mix of interpreted and compiled
  *     Source code ----(compilation) ----> machine code (not a portable file, but line by line) -----(Execution)----> program running
  * 
  * 
  *         JS ENGINE
  *             Parsing: language is parse into a AST (Abstract syntax tree)
  *             Compilation: 
  *             Execution: happens in a call stack. But in the same time a part returns to compilation to not loose time.
  * 
  * 
  * JavaScriptt Runtime: THE BROWSER
  *     container that includes all the things that We need to use JavaScript
  * 
  *     It needs the JS Engine, but also the Web APIs and Callback Queue
  * 
  * 
  */

/**
  * 91 Execution contexts and call stack
  * Materials: pdf 93 and next 
  */

/**
  * 92 Scoping and scope
  * Materials: pdf 98 and next 
  */

///////////////////////////////////////
// Scoping in Practice

function calcAge(birthYear) {
	const age = 2037 - birthYear;

	function printAge() {
		let output = `${firstName}, you are ${age}, born in ${birthYear}`;
		console.log(output);

		if (birthYear >= 1981 && birthYear <= 1996) {
			var millenial = true;
			// Creating NEW variable with same name as outer scope's variable
			const firstName = 'Steven';

			// Reasssigning outer scope's variable
			output = 'NEW OUTPUT!';

			const str = `Oh, and you're a millenial, ${firstName}`;
			console.log(str);

			function add(a, b) {
				return a + b;
			}
		}
		// console.log(str);
		console.log(millenial);
		// console.log(add(2, 3));
		console.log(output);
	}
	printAge();

	return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

/**
  * 106 Hoisting in JS
  * Materials: pdf 106 and next 
  */

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
	return a + b;
}

const addExpr = function(a, b) {
	return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
	console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

///////////////////////////////////////
// The this Keyword in Practice
console.log(this);

const calcAge2 = function(birthYear) {
	console.log(2037 - birthYear);
	console.log(this);
};
calcAge2(1991);

const calcAgeArrow = (birthYear) => {
	console.log(2037 - birthYear);
	console.log(this);
};
calcAgeArrow(1980);

const jonas = {
	year: 1991,
	calcAge2: function() {
		console.log(this);
		// console.log(2037 - this.year);
	}
};
jonas.calcAge2();

const matilda = {
	year: 2017
};

matilda.calcAge2 = jonas.calcAge2;
matilda.calcAge2();

const f = jonas.calcAge2;
f();

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';
console.log('**********98Regular functions vs arrow functions**********');

const jonas2 = {
	firstName: 'Jonas2',
	year: 1991,
	calcAge: function() {
		// console.log(this);
		console.log(2037 - this.year);

		// Solution 1
		// const self = this; // self or that
		// const isMillenial = function () {
		//   console.log(self);
		//   console.log(self.year >= 1981 && self.year <= 1996);
		// };

		// Solution 2
		const isMillenial = () => {
			console.log('HERE');
			console.log(this);
			console.log(this.year >= 1981 && this.year <= 1996);
		};
		isMillenial();
	},

	greet: () => {
		console.log(this);
		console.log(`Hey ${this.firstName}`);
	}
};
jonas2.greet();
jonas2.calcAge();

// arguments keyword
const addExpr2 = function(a, b) {
	console.log(arguments);
	return a + b;
};
addExpr2(2, 5);
addExpr2(2, 5, 8, 12);

var addArrow = (a, b) => {
	// console.log(arguments);
	return a + b;
};
addArrow(2, 5, 8);

///////////////////////////////////////
// Objects vs. primitives
console.log('**********99 Objects vs primitives **********');
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me2 = {
	name: 'Jonas',
	age: 30
};
const friend = me2;
friend.age = 27;
friend.name = 'friend changed Name';
console.log('Friend:', friend);
console.log('Me', me2);

///////////////////////////////////////
// Primitives vs. Objects in Practice
console.log('**********100 Objects vs primitives practice **********');

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27,
	family: [ 'Alice', 'Bob' ]
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
