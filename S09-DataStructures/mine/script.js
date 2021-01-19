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
console.log(Object.values(game.odds));
for(const odd of Object.values(game.odds)){
	sumOdd+=odd;
}
const oddAvg = sumOdd/Object.values(game.odds).length;
console.log(oddAvg);

// 3
for(const [key, value] of Object.entries(game.odds)){
	console.log(`Odd of victory ${game[key] ?? 'Draw'} ${value}`);
}

// 4
const scorers = {};

for(const player of game.scored){
	if(scorers.hasOwnProperty(player)){
		scorers[player]++
	} else{
		scorers[player]=1;
	}
}

console.log(scorers);