'use strict';

// 103
console.log('********** 103. Destructuring Arrays **********');

const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
	starterMenu: [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ],
	mainMenu: [ 'Pizza', 'Pasta', 'Risotto' ],

	order: function(starterIndex, mainIndex) {
		return [ this.starterMenu[starterIndex], this.mainMenu[mainIndex] ];
	},

	orderDelivery: function({ starterIndex, mainIndex, time, address }) {
		console.log(
			`Order received at ${time}. Consisting of ${this.mainMenu[mainIndex]} and ${this.starterMenu[
				starterIndex
			]}. Deliver in: ${address}`
		);
	},

	// 105
	orderPasta: function(...args) {
		console.log('Yor pizza has: ' + args);
	},

	openingHours: {
		thu: {
			open: 12,
			close: 22
		},
		fri: {
			open: 11,
			close: 23
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24
		}
	}
};

// Destructuring an array
const arr = [ 2, 3, 4 ];
let [ a, b, c ] = arr;
console.log(a, b, c);

a = 5;
console.log(a, b, c);
console.log(arr);

// Destructuring array an objects.
const [ first, , second ] = restaurant.categories;
const { starterMenu } = restaurant;
console.log('restCategories destructured: ', first, second, starterMenu);

// Receive 2 return values from a function
const [ orderedStarter, orderedMain ] = restaurant.order(2, 2);
console.log(orderedStarter, orderedMain);

// Destructuring nested
const nested = [ 2, 4, [ 5, 6 ] ];
const [ i, , [ j, k ] ] = nested;
console.log('nested destructuring ', i, j, k);

// Default values
const [ p = 1, q = 1, r = 1 ] = [ 8, 9 ];
console.log(p, q, r);

console.log('********** 104. Destructuring Objects **********');
const { name, openingHours, categories } = restaurant;
console.log('Destructuring object', name, openingHours, categories);
// changing names
const { name: restaurantName } = restaurant;
console.log(restaurantName);
// default values
const { menu = [ 'onion', 'garlic' ], starterMenu: starters = 'no starters' } = restaurant;

console.log(menu, starters);

// Nested objects
const { fri: { open: openingTime, close: closingTime } } = restaurant.openingHours;
console.log('Nested destructuring', openingTime, closingTime);
restaurant.orderDelivery({ mainIndex: 1, starterIndex: 2, time: '20:00', address: 'Calle San Vicente, 43' });

console.log('********** 105. Spread operator **********');
const arr2 = [ 7, 8, 9 ];
const newArr = [ 1, 2, ...arr2 ];
console.log(newArr);
/**Is like taking all the elements of and use them */

const newMenu = [ ...restaurant.mainMenu, 'Gnocchi' ];
console.log(newMenu);

const fullMenu = [ ...restaurant.mainMenu, ...restaurant.starterMenu ];
console.log(fullMenu);

// The spread operator works with all iterables: arrays, strings, maps, sets. But not objets.

// string spread operator

const myName = 'Javier';
const letters = [ ...myName ];
console.log(letters);

restaurant.orderPasta([ 'garlic', 'onion', 'ham', 'cheese' ]);

// The spread operator with objects
const newRestaurant = {
	...restaurant,
	anoterThing: 'another'
};

console.log(newRestaurant);

console.log('********** 106. Rest Pattern and Parameters **********');
// rest syntax
const [ theFirst, theSecond, theThird, ...theRest ] = [ 'MEX', 'SPA', 'FRA', 'NOR', 'SWE', 'ENG' ];
console.log(theRest);

// rest in others
const { sat, ...weekDays } = restaurant.openingHours;

console.log(weekDays);

console.log('********** 107. Short circuiting: && || **********');

// This operators can use ANY data type, return ANY data type and can perform SHORT CIRCUIT
// SHORTCIRCUIT: If the first operator is truthy it will return it
console.log('----------OR----------');
console.log(3 || 'Javier');
console.log(0 || 'Javier');
console.log(null || undefined);

const guests = restaurant.numGuests || 10;
console.log(guests);

console.log('----------AND----------');
console.log(3 && 'Javier');
console.log(0 && 'Javier');
console.log(null && undefined);
console.log('ok' && 4 && true && null && undefined);

console.log('********** 108. The nulish coalescig operator **********');

// nullish values are null and undefined
restaurant.numGuests = 1;
console.log(restaurant.numGuests);
// const guestCorrect = 4 ?? 10;
console.log(guests);

console.log('********** 109. Coding challenge 1 **********');

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski'
		],
		[ 'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze' ]
	],
	score: '4:0',
	scored: [ 'Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels' ],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5
	}
};

// 1
const [ players1, players2 ] = game.players;
console.log(players1, players2);

// 2
const [ gk1, ...fieldPlayers1 ] = players1;
const [ gk2, ...fieldPlayers2 ] = players2;
console.log(gk1, gk2);

// 3
const allPlayers = [ ...players1, ...players2 ];
console.log(allPlayers);

// 4
const players1Final = [ ...players1, 'Thiago', 'Coutinho', 'Perisic' ];
console.log(players1Final);

// 5

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6 Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

function printGoals(...players) {
	players.forEach((element) => {
		console.log(element);
	});
	console.log(players.length);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

console.log('********** 110. The for-of loop **********');
for (const player of players1) {
	console.log(player);
}

const menuNew = [ ...restaurant.starterMenu, ...restaurant.mainMenu ];

// creating an index
for (const item of menuNew.entries()) {
	console.log(item);
}

for (const [ index, element ] of menuNew.entries()) {
	console.log(index + 1 + '. ' + element);
}

console.log('********** 111. Enhanced Object Literals **********');

const openingHoursNew = {
	thu: {
		open: 12,
		close: 22
	},
	fri: {
		open: 10,
		close: 12
	}
};

// FIRST ENHANCEMENT
// Before
const restaurant2 = {
	name: 'rest 2',
	openingHourNew: openingHoursNew
};
console.log(restaurant2);

// Now
const restaurant3 = {
	name: 'rest 3',
	openingHoursNew
};
console.log(restaurant3);

// SECOND ENHANCEMENT
const restaurant4 = {
	name: 'rest 4',
	order: function(food) {
		console.log('Ordered food: ' + food + ' from ' + this.name);
	}
};
restaurant4.order('Food');

const restaurant5 = {
	name: 'rest 5',
	order(food) {
		console.log('Ordered food: ' + food + ' from ' + this.name);
	}
};
restaurant5.order('Food');

// THIRD ENHANCEMENT: Computing in object
const weekdays = [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun' ];

const workingHours = 8;
const openingHours3 = {
	open: 8,
	close: 8 + workingHours,
};

console.log(openingHours3);

console.log('********** 112. Optional Chaining ? **********');
//console.log(restaurant.openingHours.mon.open);

// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining (Prevents an error for undefined)

console.log(restaurant.openingHours.mon?.open);

console.log(restaurant.openingHours?.mon?.open);

for (const day of weekdays){
	// NOTE: USE OF COALESCENSE NULLISH ?? AND OPTIONAL CHAINING ?
	const open = restaurant.openingHours[day]?.open??'closed';
	console.log(`${day} opens at ${open}`);
}

// METHODS
console.log(restaurant.order?.(0,1) ?? 'Method doesn\'t exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method doesn\'t exist');

// ARRAYS
const users = ['One', ['TwoA', 'TwoB'], 'Three'];
console.log(users[1]?.[0] ?? 'It doesnt exist');
console.log(users[4]?.[0] ?? 'It doesnt exist');

console.log('********** 113. Looping Objects: Object keys, values and entries **********');

console.log('----KEYS----');
for (const day of Object.keys(openingHours)){
	console.log(day);
};

const properties = Object.keys(openingHours);
console.log(properties);

console.log('----VALUES----');
for (const day of Object.values(openingHours)){
	console.log(day);
};
console.log(Object.values(openingHours))


console.log('----ENTRIES----');
for (const day of Object.entries(openingHours)){
	console.log(day);
};
for (const [keyDay, {open, close}] of Object.entries(openingHours)){
	console.log(`${keyDay} we open at ${open} and close at ${close}`);
};
console.log(Object.entries(openingHours))


console.log('********** 114. Coding challenge #2 **********');
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// 1
for(const [goalNum, player] of game.scored.entries()){
	console.log(`${goalNum+1} - ${player}`);
}
// 2
let sumOdd = 0;
for(const odd of Object.values(game.odds)){
	sumOdd+=odd;
}
const oddAvg = sumOdd/Object.values(game.odds).length;
console.log(oddAvg);

// 3 mine
for(const [key, value] of Object.entries(game.odds)){
	console.log(`Odd of victory ${game[key] ?? 'Draw'} ${value}`);
}
// 3 Solution
for(const [key, value] of Object.entries(game.odds)){
	const teamStr = game[key] ? 'victory '+game[key]:'draw';
	console.log(`Odd of ${teamStr}: ${value}`);
}

// 4 mine
const scorers = {};

for(const player of game.scored){
	if(scorers.hasOwnProperty(player)){
		scorers[player]++
	} else{
		scorers[player]=1;
	}
}
console.log(scorers);
// 4 solution
const scorersSol = {};
for (const player of game.scored) {
	scorersSol[player] ? scorersSol[player]++ : (scorersSol[player] = 1);
  }

console.log(scorersSol);


console.log('********** 115. Sets **********');

const ordersSet = new Set([
	'Pasta',
	'Pizza',
	'Pizza',
	'Risotto',
	'Pasta',
	'Pizza',
  ]);
//   Sets avoid duplicates
  console.log(ordersSet);  
  console.log(new Set('JavGarGom'));
    
  console.log(ordersSet.size);
  console.log(ordersSet.has('Pizza'));
  console.log(ordersSet.has('Bread'));
  ordersSet.add('Garlic Bread');
  ordersSet.add('Garlic Bread');
  ordersSet.delete('Risotto');
//   this doesn0t work
console.log(ordersSet[0]);
  // ordersSet.clear();
  console.log(ordersSet);
  
  for (const order of ordersSet) console.log(order);
  
  // Good use for set: remove duplicate values of an array
  const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
  const staffUnique = [...new Set(staff)];
  console.log(staffUnique);
  
  console.log(
	new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
  );
  
  console.log(new Set('jonasschmedtmann').size);
	
  console.log('********** 116. Maps **********');
  ///////////////////////////////////////
// Maps: Fundamentals
/**It stores the values in keys */
const rest = new Map();
// set: key and value
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
// this add the value but also return the full set
console.log(rest.set(2, 'Lisbon, Portugal'));

console.log(rest)

// chaining sets
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

console.log('---Playing with booleans---');
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

// using an array as key
const arr116 = [1, 2];
rest.set(arr116, 'Test');
console.log('---Using maps for DOM Objects---');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr116));

console.log('********** 117. Maps iteration **********');
///////////////////////////////////////
// Maps: Iteration
// Another way to populate a map
const question = new Map([
	['question', 'What is the best programming language in the world?'],
	[1, 'C'],
	[2, 'Java'],
	[3, 'JavaScript'],
	['correct', 3],
	[true, 'Correct 🎉'],
	[false, 'Try again!'],
  ]);
  console.log(question);
  
  // Convert object to map
  console.log(Object.entries(openingHours));
  const hoursMap = new Map(Object.entries(openingHours));
  console.log(hoursMap);
  
  // Quiz app
  console.log(question.get('question'));
  for (const [key, value] of question) {
	if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
  }
  // const answer = Number(prompt('Your answer'));
  const answer = 3;
  console.log(answer);
  
  console.log(question.get(question.get('correct') === answer));
  
  // Convert map to array
  console.log([...question]);
  // console.log(question.entries());
  console.log([...question.keys()]);
  console.log([...question.values()]);
  

  console.log('********** 119. Coding challenge #3 **********');
  
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
	[17, '⚽️ GOAL'],
	[36, '🔁 Substitution'],
	[47, '⚽️ GOAL'],
	[61, '🔁 Substitution'],
	[64, '🔶 Yellow card'],
	[69, '🔴 Red card'],
	[70, '🔁 Substitution'],
	[72, '🔁 Substitution'],
	[76, '⚽️ GOAL'],
	[80, '⚽️ GOAL'],
	[92, '🔶 Yellow card'],
  ]);

//   1. Create an array 'events' of the different game events that happened (no duplicates)

const eventsSet = new Set(gameEvents.values());
const events = Array.from(eventsSet)
console.log(eventsSet);
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.

gameEvents.delete(64);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on average, every ${90/gameEvents.size} minutes`);
// bonus
const timeEvent = [...gameEvents.keys()].pop();
console.log(timeEvent);
console.log(
  `An event happened, on average, every ${timeEvent / gameEvents.size} minutes`
);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:      [FIRST HALF] 17: ⚽️ GOAL
for(const [key, event] of gameEvents){
	console.log(key<=45?`[FIRST HALF] ${key}: ${event}`:`[SECOND HALF] ${key}: ${event}`);
}


console.log('********** 120. Working with strings 1 **********');
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

// INDEX OF LAST INDEX OF
console.log('----------INDEXOF----------');
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('Germany'));

console.log('----------SLICE----------');
console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

console.log('----------SLICE FUNCTION----------');
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));


console.log('********** 120. Working with strings 2 **********');
const airline2 = 'TAP Air Portugal';
console.log('----------LOWER AND UPPERCASE----------');
console.log(airline2.toLowerCase());
console.log(airline2.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

console.log('----------COMPARING EMAILS----------');
// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

console.log('----------REPLACE()----------');
// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

console.log('----------BOOLEANS: includes() startsWith() endsWith()----------');
// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane2.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

console.log('----------PRACTICE----------');
// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

console.log('********** 121. Working with strings 3 **********');
///////////////////////////////////////
// Working With Strings - Part 2

console.log('----------SPLIT() JOIN()----------');
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

console.log('----------PADDING()----------');
// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log('CREDIT CARD WITH NUMBER PADDING');
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

console.log('----------REPEAT()----------');
// Repeat
const message2 = 'Bad waether... All Departues Delayed...\n';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);


console.log('********** 123. Coding challenge #4 **********');

// Coding Challenge #4
/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀

*/
const newDiv = document.createElement('div');
document.body.append(newDiv);
newDiv.append(document.createElement('textarea'));
newDiv.append(document.createElement('button'));

const btn= document.querySelector('button');
btn.textContent="Click me";
btn.addEventListener('click', ()=>{	
	const input = document.querySelector('textarea').value;
	const lines = input.trim().split('\n');
	const newText = [];
	
	for(let line of lines){
		const words = line.trim().toLowerCase().split('_');
		console.log(words)
		for(let i=1; i<words.length; i++){
			let firstLetter = words[i][0].toUpperCase();
			let newWord = firstLetter+words[i].slice(1);
			words[i]=newWord

		}
		line=words.join('');
		newText.push(line)		
	}
	for(let i=0; i<newText.length; i++){
		console.log(newText[i].padEnd(20,' ')+'✅'.repeat(i+1));
	}
})


// SOLUTION
document.querySelector('button').addEventListener('click', function () {
	const text = document.querySelector('textarea').value;
	const rows = text.split('\n');
  
	for (const [i, row] of rows.entries()) {
	  const [first, second] = row.toLowerCase().trim().split('_');
  
	  const output = `${first}${second.replace(
		second[0],
		second[0].toUpperCase()
	  )}`;
	  console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
	}
  });
  

