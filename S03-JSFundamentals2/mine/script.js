'use strict';
console.log('**********L32 Strict Mode**********');

let hasDriverLicense = false;
let passTest = true;

// This will generate an error visible with use strict
// if (passTest) {
// 	hasDriverLinceseeee = true;
// }

// const interface = 'Audio
// this too is an strict error because interface is reserved (like if, private, public, ecc)

console.log('**********L33 Functions**********');

// declaring
function myFunction() {
	console.log('a function');
}

// calling, running, invoking a function
myFunction();

// assignment

function describeCountry(country, pop, capitalCity) {
	return `${country} has ${pop} million people and its capital city is ${capitalCity}`;
}

console.log(describeCountry('México', 130, 'Ciudad de México'));
console.log(describeCountry('España', 47, 'Madrid'));

console.log('**********L34 Function Declarations vs expressions**********');

console.log('function DECLARATION');
function calculateAge(birthYear) {
	return new Date().getFullYear() - birthYear;
}
console.log(calculateAge(1985));

console.log('function EXPRESSION');
const calculateAgeExp = function(birthYear) {
	return new Date().getFullYear() - birthYear;
};

console.log(calculateAgeExp(1985));

// Assignment
function percentageOfWorldDec(pop) {
	const worldPop = 7900;
	return (pop / worldPop * 100).toFixed(2);
}

const percentageOfWorldExp = function(pop) {
	const worldPop = 7900;
	return (pop / worldPop * 100).toFixed(2);
};

console.log(`México has the ${percentageOfWorldDec(130)}% of the world population}`);

console.log(`Spain has the ${percentageOfWorldDec(48)}% of the world population}`);

console.log('**********L35 Arrow function**********');
// Assignment
const percentageOfWorldArrow = (pop) => (pop / 7900 * 100).toFixed(2);

console.log(`China has the ${percentageOfWorldDec(1700)}% of the world population}`);

console.log('**********L36 Functions calling other functions **********');

function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	const juice = `juice has ${applePieces} apple pieces and ${orangePieces} orange pieces`;
	return juice;
}

console.log(fruitProcessor(2, 3));

// Assignments
const describePopulation = (country, population) =>
	`${country} has ${population}, which is ${percentageOfWorldArrow(population)}% population of the world`;

console.log(describePopulation('Russia', 144.5));

console.log('**********L37 Reviewing functions **********');

// Reviewing Functions
const calcAge = function(birthYeah) {
	return 2037 - birthYeah;
};

const yearsUntilRetirement = function(birthYeah, firstName) {
	const age = calcAge(birthYeah);
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years`);
		return retirement;
	} else {
		console.log(`${firstName} has already retired 🎉`);
		return -1;
	}
};

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

console.log('**********L38 Coding Challenge 1 **********');
///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const calculateAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = (avgDolp, avgKoala) => {
	if (avgDolp >= avgKoala * 2) {
		console.log(`Dolphins win (${avgDolp} vs ${avgKoala})`);
	} else if (avgDolp * 2 <= avgKoala) {
		console.log(`Koalas win (${avgDolp} vs ${avgKoala})`);
	} else {
		console.log(`No winner (${avgDolp} vs ${avgKoala})`);
	}
};

const dolphinAvg = calculateAverage(85, 54, 41);
const koalaAvg = calculateAverage(23, 34, 27);
checkWinner(dolphinAvg, koalaAvg);

///////////////////////////////////////
// Introduction to Arrays
console.log('**********L39 Intro to Arrays **********');
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = [ 'Michael', 'Steven', 'Peter' ];
console.log(friends);

// Another way to create an array
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

// replace an element
friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
// Arrays accept different values types
const jonas = [ firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends ];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge39 = function(birthYeah) {
	return 2020 - birthYeah;
};
const years = [ 1990, 1967, 2002, 2010, 2018 ];

const age1 = calcAge39(years[0]);
const age2 = calcAge39(years[1]);
const age3 = calcAge39(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [ calcAge39(years[0]), calcAge39(years[1]), calcAge39(years[years.length - 1]) ];
console.log(ages);

// Assignment
const populations = [ 130, 48, 6, 1400 ];
console.log(populations.length === 4 ? true : false);

const populationPercentage = [];
populations.forEach((pop) => {
	populationPercentage.push(percentageOfWorldArrow(pop));
});

console.log(populationPercentage);

///////////////////////////////////////
// Basic Array Operations (Methods)
console.log('**********L40 Basic Array Methods **********');
const friends40 = [ 'Michael', 'Steven', 'Peter' ];

// Add elements PUSH / UNSHIFT
const newLength = friends40.push('Jay');
console.log(friends40);
console.log(newLength);

friends40.unshift('John');
console.log(friends40);

// Remove elements POP / SHIFT
friends40.pop(); // Last
const popped = friends40.pop();
console.log('popped: ' + popped);
console.log(friends40);

friends40.shift(); // First
console.log(friends40);

// INDEX OF

console.log(friends40.indexOf('Steven'));
console.log('index of an inexistent element' + friends40.indexOf('Bob'));

// INCLUDES
friends40.push(23);
console.log(friends40.includes('Steven'));
console.log(friends40.includes('Bob'));
console.log(friends40.includes(23));

if (friends40.includes('Steven')) {
	console.log('You have a friend called Steven');
}

// Assignment
const neighbours = [ 'Portugal', 'Andorra', 'Francia' ];
neighbours.push('Utopia');
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes('Germany')) {
	console.log('probably not a central european country');
}
neighbours[neighbours.indexOf('Francia')] = 'France';
console.log(neighbours);

console.log('**********L41 Coding challenge 2 **********');
///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
const stevenBills = [ 125, 555, 44 ];
const stevenTips = [];
stevenBills.forEach((bill) => stevenTips.push(calcTip(bill)));
const stevenTotal = [];
for (let i = 0; i < stevenTips.length; i++) {
	stevenTotal.push(stevenTips[i] + stevenBills[i]);
}

console.log(stevenBills, stevenTips, stevenTotal);

///////////////////////////////////////
console.log('**********L42 Introduction to Objects **********');
// Introduction to Objects
const jonasArray = [ 'Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', [ 'Michael', 'Peter', 'Steven' ] ];

const jonas42 = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	age: 2037 - 1991,
	job: 'teacher',
	friends: [ 'Michael', 'Peter', 'Steven' ]
};

// Assignment
const myCountry = {
	country: 'México',
	capital: 'Ciudad de México',
	language: 'spanish',
	population: 130,
	neighbours: [ 'Guatemala', 'Belice', 'Estados Unidos' ],
	describe: function() {
		console.log(
			`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours
				.length} neighbouring countries and a capital called: ${this.capital}`
		);
	},
	checkIsland: function() {
		this.isIsland = this.neighbours.length === 0 ? true : false;
	}
};

///////////////////////////////////////
console.log('**********L43 Dot v bracket notation **********');
// Dot vs. Bracket Notation
console.log(jonas42);

console.log(jonas42.lastName);
console.log(jonas42['lastName']);

const nameKey = 'Name';
console.log(jonas42['first' + nameKey]);
console.log(jonas42['last' + nameKey]);

// console.log(jonas42.'last' + nameKey)

// const interestedIn = prompt(
// 	'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
// );
const interestedIn = 'job';

if (jonas42[interestedIn]) {
	console.log(jonas42[interestedIn]);
} else {
	console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

// Adding new properties
jonas42.location = 'Portugal';
jonas42['twitter'] = '@jonasschmedtman';
console.log(jonas42);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
	`${jonas42.firstName} has ${jonas42.friends.length} friends, and his best friend is called ${jonas42.friends[0]}`
);

// Assignment
console.log(
	`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry
		.neighbours.length} neighbouring countries and a capital called: ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry);
myCountry['population'] -= 2;
console.log(myCountry);

///////////////////////////////////////
// Object Methods
console.log('**********L44 Object methods **********');

const jonas44 = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	birthYeah: 1991,
	job: 'teacher',
	friends: [ 'Michael', 'Peter', 'Steven' ],
	hasDriversLicense: true,

	calcAge: function() {
		this.age = 2037 - this.birthYeah;
		return this.age;
	},

	getSummary: function() {
		return `${this.firstName} is a ${this.calcAge()}-year old ${jonas44.job}, and he has ${this.hasDriversLicense
			? 'a'
			: 'no'} driver's license.`;
	}

	// calcAge: function (birthYeah) {
	//   return 2037 - birthYeah;
	// }

	// calcAge: function () {
	//   // console.log(this);
	//   return 2037 - this.birthYeah;
	// }
};

console.log(jonas44);
console.log(jonas44.calcAge());
console.log(jonas44.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas44.getSummary());

// Assignment
// The first and third part is done in the myCountry object
///////////////////////////////////////
// Coding Challenge #3
console.log('**********L45 Challenge 3 **********');

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
	name: 'Mark Miller',
	height: 1.69,
	weight: 75,
	calcBMI: function() {
		this.BMI = this.weight / this.height ** 2;
		return this.BMI;
	}
};

const john = {
	name: 'John Smith',
	height: 1.95,
	weight: 92,
	calcBMI: function() {
		this.BMI = this.weight / this.height ** 2;
		console.log(this.BMI);
		return this.BMI;
	}
};

mark.calcBMI();
john.calcBMI();

const printHigherBMI = (person1, person2) => {
	if (person1.BMI < person2.BMI) {
		let personAux = person1;
		person1 = person2;
		person2 = personAux;
	}
	console.log(`${person1.name}'s BMI (${person1.BMI}) is higher than ${person2.name}'s (${person2.BMI})!`);
};

printHigherBMI(mark, john);

///////////////////////////////////////
console.log('**********L46 Iteration: the for loop **********');
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
	console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
console.log('**********L47 Looping through array, break and continue **********');
const jonas47 = [ 'Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', [ 'Michael', 'Peter', 'Steven' ], true ];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas47.length; i++) {
	// Reading from jonas array
	console.log(jonas47[i], typeof jonas[i]);

	// Filling types array
	// types[i] = typeof jonas[i];
	types.push(typeof jonas47[i]);
}

console.log(types);

const years47 = [ 1991, 2007, 1969, 2020 ];
const ages47 = [];

for (let i = 0; i < years47.length; i++) {
	ages47.push(2037 - years47[i]);
}
console.log(ages47);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas47.length; i++) {
	if (typeof jonas47[i] !== 'string') continue;

	console.log(jonas47[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas47.length; i++) {
	if (typeof jonas47[i] === 'number') break;

	console.log(jonas47[i], typeof jonas47[i]);
}

///////////////////////////////////////
// Looping Backwards and Loops in Loops
console.log('**********L47 Looping backwards **********');
const jonas48 = [ 'Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', [ 'Michael', 'Peter', 'Steven' ], true ];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas48.length - 1; i >= 0; i--) {
	console.log(i, jonas48[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`-------- Starting exercise ${exercise}`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
	}
}

///////////////////////////////////////
// The while Loop
console.log('**********L48 the while loop **********');
for (let rep = 1; rep <= 10; rep++) {
	console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
	// console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
	rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

do {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) console.log('You got 6. Loop is about to end...');
} while (dice !== 6);

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const stevenBills2 = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52 ];
const stevenTips2 = [];
stevenBills2.forEach((bill) => stevenTips2.push(calcTip(bill)));
const stevenTotal2 = [];
for (let i = 0; i < stevenTips2.length; i++) {
	stevenTotal2.push(stevenTips2[i] + stevenBills2[i]);
}

console.log(stevenBills2, stevenTips2, stevenTotal2);

const calculateAverage2 = (array) => {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum / array.length;
};

console.log(calculateAverage2(stevenTotal2));
