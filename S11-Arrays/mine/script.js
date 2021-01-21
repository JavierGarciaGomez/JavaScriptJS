'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/**
 * 144. Creating DOM elements
 */

const displayMovements = function (movementsArray) {
  // empty the container
  containerMovements.innerHTML = '';

  movementsArray.forEach(function (mov, i) {
    // define the type of movement
    const type = mov >= 0 ? 'deposit' : 'withdraw';
    // html for each movement
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
        </div>
      `;
    // insert it in the container
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// call the function
displayMovements(account1.movements);
/**
 * 150. Creating balance
 */
console.log('********** 150. reduce **********');

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${balance} €`;
};

calcDisplayBalance(account1.movements);

/**
 * 148. Computing usernames
 */

const user = 'Javier García Gómez';
const createUsernames = accounts =>
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(element => element[0])
      .join('');
  });

createUsernames(accounts);
console.log(accounts);

/**
 * 152. Chaining methods
 */
console.log('********** 152. chaining methods **********');
calcDisplaySummary(accounts){
  const income= accounts.filter(acc => account=>0).reduce((acc, account) => acc + account);
  const outcome= accounts.filter(acc => account<0).reduce((acc, account) => acc + account);
  console.log(income, outcome);
}
calcDisplaySummary(account1.movements)

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/**
 * NOT RELATED TO THE BANKLIST PROECT
 */

/////////////////////////////////////////////////
console.log('********** 140. Simple Array Methods **********');
// Simple Array Methods
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log('+++++ SLICE +++++');
// SLICE
console.log('Full array: ', arr);
console.log('slice(2)', arr.slice(2));
console.log('slice(2, 4)', arr.slice(2, 4));
console.log('slice(-2)', arr.slice(-2));
console.log('slice(-1)', arr.slice(-1));
console.log('slice(1, -2)', arr.slice(1, -2));
console.log('slice()', arr.slice());
console.log('...arr', [...arr]);

console.log('+++++ SPLICE +++++');
// SPLICE
// console.log(arr.splice(2));
let spliced = arr.splice(-1);
console.log('splice(-1). Spliced:', spliced, 'array ', arr);
spliced = arr.splice(1, 2);
console.log('splice(1, 2). Spliced:', spliced, 'array ', arr);

console.log('+++++ REVERSE +++++');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));

console.log('********** 141. Looping arrays: Foreach **********');
///////////////////////////////////////
// Looping Arrays: forEach
const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements2) {
for (const [i, movement] of movements2.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements2.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
/**
 * You can not break a foreach, so in those cases is better to use for of
 */
console.log('********** 142. forEach with maps and sets **********');
console.log('---- MAPS ----');
const currencies2 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies2.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

console.log('---- SETS ----');
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

console.log('********** 145. Coding challenge #1 **********');
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

function checkDogs(dogsJulia, dogsKate) {
  dogsJulia = dogsJulia.slice(1, -2);
  const fullDogs = dogsJulia.concat(dogsKate);
  fullDogs.forEach((dogAge, index) => {
    console.log(
      `Dog number ${index + 1} is ${
        dogAge >= 3 ? `an adult, and is ${dogAge} yeas old` : 'still a puppy 🐶'
      }`
    );
  });
}

let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];
checkDogs(dogsJulia, dogsKate);
console.log('SECOND TEST');
dogsJulia = [9, 16, 6, 8, 3];
dogsKate = [10, 5, 6, 1, 4];
checkDogs(dogsJulia, dogsKate);

console.log('SOLUTION');
const checkDogsSol = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogsSol(dogsJulia, dogsKate);

console.log('********** 146. MAP(), FILTER() REDUCE() **********');
/**
 * MAP: creates a brand new array, based on the original, aplicating the method
 * FILTER: filter the elements that satisfy the filter condition
 * REDUCE: reduces all the elements in one single value
 */

console.log('********** 147. MAP() **********');

const eurToUsd = 1.1;
console.log('original', movements);
const movementsMapped = movements.map(movement =>
  (movement * eurToUsd).toFixed(0)
);
console.log('mapped', movementsMapped);

console.log('+++++ pushing to an array with for of +++++');
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(Math.trunc(mov * eurToUsd));
console.log(movementsUSDfor);

console.log('+++++ adding index to map +++++');
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

console.log('********** 149. FILTER() **********');
///////////////////////////////////////
// The filter Method
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log('unfiltered ', movements);
console.log('filtered ', deposits);

console.log('+++++ filter with for of +++++');
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

console.log('+++++ filter withdrawals +++++');
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

console.log('********** 150. REDUCE() **********');
///////////////////////////////////////
// The reduce Method
console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
console.log('+++++ balance +++++');
// parameters: accumulator, currentValue, startingValue, array
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

console.log('+++++ reduce for of +++++');
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

console.log('+++++ get max value +++++');
// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

console.log('********** 151. Coding challenge 2 **********');
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = dogAges => {
  const dogsHumanAge = dogAges.map(dogAge =>
    dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
  );
  console.log(dogsHumanAge);
  const filteredDogsAge = dogsHumanAge.filter(dogAge => dogAge > 18);
  console.log(filteredDogsAge);
  const sumAdultsDogsAge = filteredDogsAge.reduce(
    (acc, adultDogAge) => acc + adultDogAge
  );
  const avgAdultsDogAge = sumAdultsDogsAge / filteredDogsAge.length;
  console.log(avgAdultsDogAge);

  // The last result in one function
  const sumAdultsDogsAgeOne = dogAges
    .map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter(dogAge => dogAge > 18)
    .reduce((acc, adultDogAge) => acc + adultDogAge);
  console.log(sumAdultsDogsAgeOne);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log('********** 152. Chaining methods **********');
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov);
console.log(totalDepositsUSD.toFixed(2));
