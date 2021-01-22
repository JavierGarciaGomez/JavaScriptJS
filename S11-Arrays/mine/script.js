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

//  160
const displayMovements = function (movementsArray, sort = false) {
  // empty the container
  containerMovements.innerHTML = '';

  // 160
  const movs = sort
    ? movementsArray.slice().sort((a, b) => a - b)
    : movementsArray;

  movs.forEach(function (mov, i) {
    // define the type of movement
    const type = mov >= 0 ? 'deposit' : 'withdraw';
    // html for each movement
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;
    // insert it in the container
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// MOVED TO login
// displayMovements(account1.movements);
/**
 * 150. Creating balance
 */
console.log('********** 150. reduce **********');

// 150, 156
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${account.balance} €`;
};
// MOVED TO login
// calcDisplayBalance(account1.movements);
/**
 * 152. Chaining methods
 */
console.log('********** 152. chaining methods **********');
// changed in 155
/*
const calcDisplaySummary = function (movements) {
  const income = movements
    .filter(movement => movement >= 0)
    .reduce((acc, movement) => acc + movement);
  const outcome = movements
    .filter(movement => movement < 0)
    .reduce((acc, movement) => acc + movement);

  // interes each deposit, when the interest is at least 1 euro
  const interest = movements
    .filter(movement => movement >= 0)
    .map(movement => movement * 0.012)
    .filter(interest => interest >= 1)
    .reduce((acc, movement) => acc + movement);
  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(outcome)}€`;
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};
*/
const calcDisplaySummary = function (account) {
  const income = account.movements
    .filter(movement => movement >= 0)
    .reduce((acc, movement) => acc + movement);
  const outcome = account.movements
    .filter(movement => movement < 0)
    .reduce((acc, movement) => acc + movement);

  // interes each deposit, when the interest is at least 1 euro
  const interest = account.movements
    .filter(movement => movement >= 0)
    .map(movement => (movement * account.interestRate) / 100)
    .filter(interest => interest >= 1)
    .reduce((acc, movement) => acc + movement);
  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(outcome)}€`;
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

// MOVED TO login
// calcDisplaySummary(account1.movements);

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

console.log('********** 155. Implementing Login **********');
// Event handler
let currentAccount;

btnLogin.addEventListener('click', event => {
  event.preventDefault();
  console.log('login');
  console.log(inputLoginUsername.value);
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(Number(inputLoginPin.value));

  // optional chaining
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // 156

    console.log('Correct pin');
    updateUI(currentAccount);
  }
});

// 156
const updateUI = function (account) {
  displayMovements(account.movements);
  // Display balance
  calcDisplayBalance(account);
  // Display summary
  calcDisplaySummary(account);
};

console.log('********** 156. Implementing transfers **********');
btnTransfer.addEventListener('click', ev => {
  ev.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
  inputTransferAmount = inputTransferTo = '';
});

console.log('********** 157. findIndex() **********');
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // Delete account
    accounts.splice(
      accounts.findIndex(account => account === currentAccount),
      1
    );
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin = '';
});

console.log('********** 158. some() every() **********');
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    (amount > 0 && currentAccount, movements.some(mov => mov >= amount / 10))
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

console.log('********** 160. sort() **********');
let sorted = false;
btnSort.addEventListener('click', function (ev) {
  ev.preventDefault();
  sorted = !sorted;
  displayMovements(currentAccount.movements, sorted);
});
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

console.log('********** 153. Coding challenge 3 **********');
// done in my challenge

// Solution
const calcAverageHumanAgeSol2 = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// adults.length

const avg1 = calcAverageHumanAgeSol2([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAgeSol2([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

console.log('********** 154. The find method **********');
const movement = movements.find(mov => mov < 0);
console.log(movement);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

console.log('********** 157. findIndex() **********');
/**Just in the banking app */

console.log('********** 158. some() every() **********');
console.log(movements);

// EQUALITY
console.log('includes(-130)', movements.includes(-130));

// SOME: CONDITION
console.log(
  'some(===-130)',
  movements.some(mov => mov === -130)
);

const anyDeposits = movements.some(mov => mov > 0);
console.log('some(>0)', anyDeposits);

// EVERY
console.log(
  'every(>0)',
  movements.every(mov => mov > 0)
);
console.log(
  'every(>0)',
  account4.movements.every(mov => mov > 0)
);

// Separate callback
const deposit = mov => mov > 0;
console.log('some(deposit)', movements.some(deposit));
console.log('every(deposit)', movements.every(deposit));
console.log('filter', movements.filter(deposit));

console.log('********** 159. flat() flatMap() **********');
console.log('+++++ flat() +++++');
const arr159 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr159.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// flat(argument = level of depth)
console.log(arrDeep.flat(2));

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

console.log('+++++ flatMap() +++++');
// The same of the previous but comgining flat and map
// flatMap.
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

console.log('********** 160. sort() **********');
console.log('+++++ strings +++++');
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners);
console.log('after sort', owners.sort());

console.log('+++++ numbers +++++');
// Numbers
console.log(movements);
console.log('sorted', movements.sort());

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log('sorted asc', movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log('sort desc', movements);

console.log(
  '********** 161. more ways of creating and filling arrays **********'
);

const arr161 = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

console.log('+++++ fill() +++++');
// Emprty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
// parameters(value, start, end)
x.fill(1, 3, 5);
console.log('fill(1,3,5)', x);
x.fill(1);
console.log('fill(1)', x);

arr161.fill(23, 2, 6);
console.log('fill(23,2,6)', arr161);

console.log('+++++ from() +++++');
// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// _ is current, but is not used: throw-aray variable
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

console.log('+++++ Example(click balance) +++++');
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    currentElement => Number(currentElement.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});

/**
 * 163 SUMMARY: Which array method to use?
 *
 */

console.log('********** 163. Coding challenge #4 **********');
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

dogs.forEach(dog => {
  dog.reccomendedFood = dog.weight * 0.75 * 28;
});
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);
console.log(
  sarahDog.curFood > sarahDog.reccomendedFood
    ? 'Sarahs dog is eating too much'
    : "Sarah's dog is eating too litle"
);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.reccomendedFood)
  .map(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.reccomendedFood)
  .map(dog => dog.owners);
console.log(ownersEatTooMuch);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
