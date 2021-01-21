'use strict';

console.log('********** 126. Default Parameters **********');

///////////////////////////////////////
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

console.log('********** 127. Arguments: values vs references **********');
/**Is related with primitives and objects */

const flight = 'LH234';
const javier = {
  name: 'Javier',
  passport: '1234567890'
}

const checkIn = function(flightNum, passenger){
  flightNum='LH99',
  passenger.name = 'Mr.' +passenger.name;

  if(passenger.passport==='1234567890'){
    console.log('Check in');
  } else{
    console.log('Wrong passport');
  }
}

checkIn(flight, javier);
/** The flight variable is a primitive value, so the parameter is a copy of the original value. So the parameter is a VALUE
 * But the passenger is an object, so the parameter is a reference .
 * In JAVASCRIPT THERE IS NO PASSING BY REFERENCE, JUST PASSED BY VALUE, IN AN OBJECT WE ARE PASSING A VALUE THAT CONTAINS A MEMORY ADDRESS
 */
console.log(flight, javier);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(javier);
checkIn(flight, javier);

console.log('********** 128. First class vs Higher-order functions **********');
// In JavaScript the functions are treated as first class: as values.


const testButton = document.createElement('button');
document.body.append(testButton);
testButton.textContent='testButton';
// Higher-order functions examples:
// 1. Function that receives another function
// a) first class
const firstClassFunction = function (name) {console.log('You clicked me')};
// b) higher order function receiving the firstclass or a CALLBACK function
testButton.addEventListener('click', firstClassFunction);

// 2. Functions that return another function
function count(){
  let counter = 0;
  return function(){
    counter++;
  }
}
count();


console.log('********** 129. Functons accepting callbacks **********');
///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, parFunction) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${parFunction(str)}`);
  console.log(`Transformed by: ${parFunction.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
//document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

console.log('********** 130. Functons returning functions **********');
///////////////////////////////////////
// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Save the returning function
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

// use both functions
greet('Hello')('Jonas');

// Challenge convert to arrow
const greetArrow = greeting => (name) => console.log(`${greeting} ${name}`);
greetArrow("Hola")('Javier');

console.log('********** 131. The call and apply methods **********');
///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

console.log('-----EUROWINGS-----');
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;

// Does NOT work, because the this is undefined
// book(23, 'Sarah Williams');

// The are three methods to reassign the this property of a function: CALL, APPLY and BIND
console.log('-----CALL METHOD-----');
// Call method
// object.{call function} ({object to point to}, {...the rest of the aruments})
book.call(eurowings, 23, 'Sarah Williams');
console.log('eurowings bookings: ', eurowings.bookings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log('lufthansa bookings: ', lufthansa.bookings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

console.log('-----APPLY METHOD-----');
// Apply method: it uses an array instead of the arguments
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);


console.log('********** 132. The bind methods **********');
///////////////////////////////////////
// The bind Method
/**Bind doesnt call the function, instead it returns a new function
 * where the function is bound
 */

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
console.log(eurowings.bookings);

console.log('-----SETTING A PARAMETER WITH BIND-----');
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

console.log('-----WITH EVENT LISTENERS-----');
// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log('Just bought a plane');
  this.planes++;
  console.log(this);
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  // We have to bind it, if not the this is the element (button clicked)
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

  console.log('-----PARTIAL APPLICATION-----');
// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// the this is ignored, because we dont care. so we use null
const addIVA = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addIVA(100));
console.log(addIVA(250));

// Challenge The same function but with returned functions
function addTaxChallenge(rate){
  return function(value){
    return value + value*rate;
  }
}
// same with arrows
const addTaxChallenge2 = (rate) => (value) => value + value*rate;

const addIVA2 = addTaxChallenge2(0.16);
console.log(addIVA2(100));

console.log('********** 133. Coding Challenge #1 **********');
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registeredNewAnswer(){
    let validAnswer = false;
    // 1.2 accept just valid answers
    while(!validAnswer){
      // 1.1 capture the answeer
      const answer = prompt("What is your favourite programming language\?\n"+
      "0: JavaScript\n"+
      "1: Python\n"+
      "2: Rust\n"+
      "3: C++\n"+
      "(Write option number)");

      const validAnswers=[0,1,2,3];
      if(validAnswers.includes(Number(answer))){
        // 1.2 increase the answer poll
        this.answers[answer]++;
        validAnswer=true;
      } else{
        alert("Is not a valid answer");
      }
    }
    this.displayResults('string');
    this.displayResults('array');
  },
  displayResults(type){
    if(type === "string"){
      let printedResults = "The poll results are: "
      this.answers.forEach(answer => printedResults += answer+", ");
      console.log(printedResults);
    } else if (type==='array'){
      console.log(this.answers);
    } else{
      console.log('not a valid type');
    }
  }
};

document.querySelector('.poll').addEventListener('click', poll.registeredNewAnswer.bind(poll))


/*BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?
BONUS TEST DATA 1: [5, 2, 3]
*/

// Solution
const pollSolution = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', pollSolution.registerNewAnswer.bind(pollSolution));

pollSolution.displayResults.call({ answers: [5, 2, 3] }, 'string');
pollSolution.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
pollSolution.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


console.log('********** 134. Immediately invoked function expression (IIFE) **********');
///////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);



console.log('********** 135. Closures **********');
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

console.log('********** 136. More closures examples **********');
///////////////////////////////////////
// More Closure Examples
// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

console.log('********** 137. Coding challenge #2 **********');
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
