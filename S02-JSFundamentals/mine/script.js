console.log('***********************Lesson 7 Hello, World*******************************');
// alert

let js = 'amazing';

if (js === 'amazing') {
	console.log('Passed the if');
}

console.log(4 + 3 + 2);

console.log('***********************Lesson 8 A brief introduction*******************************');
/**JS is a highlevel, object oriented, multiparadigm programming language
 * programming language: tool that let us write code
 * high-level: we dont have to worry about complex stuff like memory management
 * oop: let us use objects
 * multi-paradigm: we can use multiple styles
 * 
 * What does it do?
 * is the language that gives dynamic to html and css (verbs vs nouns and adjettives)
 * 
 * frontend
 * backend
 * native mobile app
 * native desktop app
 * 
 * JavaScript releases
 * ES5
 * ES6 2015
 * ES7 2016
 * ES8 2017
 * ES9 2018
 * ES10 2019
 * ES11 2020g
 */

console.log('**********Lesson 9 Linking a JS File**********');
console.log('**********L10 Values and Variables**********');
let firstName = 'Javier';
console.log(firstName);

// assignments
let country = 'Mexico',
	continent = 'America',
	population = 120000000;
console.log(country, continent, population);

console.log('**********L12 Data types**********');
// number
// String
// boolean
// undefined: variable not yet defined
// null: empty value
// Symbol ES2015: unique value that cannot be change
// BigInt ES2020: larger integers than the number type can hold

// Dynamic typing in JS

let aBoolean = true;
console.log(typeof aBoolean);
console.log(Number.isNaN(0 / 0));

// assignment
let isIsland = false;
let language;
console.log(isIsland, population, country, language);

console.log('**********L13 let, const, var**********');
let age13 = 30;
age = 31;

const BIRTHYEAR = 1985;

var job = 'programmer';

// let is blockScoped and var is function scoped

// assignment
language = 'spanish';

console.log('**********L14 Basic operators **********');
/**
 * MATHEMATIC OPERATORS: + - * / ** %
 * typeOf operator
 * ASSIGNMENT OPERATORS: = ++ -- +=
 * COMPARISON OPERATORS: < > <= >= == ===
 */

const thisYear = 2020;
const ageJavier = thisYear - 1985;
console.log(ageJavier);

// assignments
console.log(`1. half pop ${population / 2}`);
console.log(`2. pop ${++population}`);
console.log(`3. biggerThanFinland ${population > 6000000}`);
console.log(`4. biggerThanAverage ${population > 3300000}`);
console.log(`5. ${country} is in ${continent}, and its ${population} people speak ${language}`);

console.log('**********L15 Precedence **********');
/**
 * 
 */

console.log('**********L16 Challenge #1 **********');

function obtainBMI(mass, height) {
	console.log(mass / height ** 2);
	return mass / height ** 2;
}

let markHigherBMI = obtainBMI(78, 1.69) > obtainBMI(92, 1.95);
console.log('mark has higher BMI: ' + markHigherBMI);

markHigherBMI = obtainBMI(95, 1.88) > obtainBMI(85, 1.76);
console.log('mark has higher BMI: ' + markHigherBMI);

console.log('**********L17 Strings and template literals **********');
console.log('**********L18 if if else **********');
// assignment
if (population > 33000000) {
	console.log(`${country}'s population is above average`);
} else {
	console.log(`${country}'s population is ${33000000 - population} below average`);
}

console.log('**********L19 challenge 2 **********');

const markBMI = obtainBMI(70, 1.8);
const johnBMI = obtainBMI(53, 1.6);

if (markBMI > johnBMI) {
	console.log(`Mark BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else {
	console.log(`Mark BMI (${markBMI}) is lower than John's (${johnBMI})`);
}

console.log('**********L20 Type conversion and coertion **********');
const yearText = '2020';
console.log(Number(yearText), yearText);
console.log(typeof NaN);

// we can only convert to a string, to a number or to a boolean
// type conversion is like Number(var), type coertion is like the next where the number is converted to String
console.log('I am ' + 35 + ' years old');

// assignment
let challenge20a = '9' - '5'; // 4
let challenge20b = '19' - '13' + '17'; // 617
let challenge20c = '19' - '13' + 17; // 23
let challenge20d = '123' < 57; // false
let challenge20e = 5 + 6 + '4' + 9 - 4 - 2; // 1143

console.log(challenge20a, challenge20b, challenge20c, challenge20d, challenge20e);

console.log('**********L21 Truthy and falsy values **********');
/**
 * Falsy values: false, 0, '', undefined, null, NaN
 * Truthy all the rest
 */

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Javier')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false
console.log(Boolean([])); // true

let moneyJavier = 0;
if (moneyJavier) {
	console.log('he has money');
} else {
	console.log('he doesnt have money');
}

console.log('**********L22 equality operators == === **********');
