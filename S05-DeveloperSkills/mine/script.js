// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;

console.log(x);

/**
 * 57 How to succeed at learning how to code
 * 1. Have a clear goal:
 *      set a specific, measurable, realistic time based goal
 *      imagine a big project
 *      Learn the technologies you need
 * 
 * 2. Dont just copy code
 * 3. Reinforce your learning
 * 4. Practice on your own
 * 5. Don't become frustrated no matter with quality
 * 6. Embrace the fact that You will never know everything
 * 7. Don't learn in isolation
 * 8. The courses is just the beginning
 */
//

/**
 * 57. Become a solver problem
 * 1. Ask the right questions
 * 2. Divide and conquer
 * 3. Do research
 * 4. Write pseudo-code
 */

/**
  * 58. Using Google, StackOverflow and MDN
  * We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
  * 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

  */

const temperatures = [ 3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5 ];

const calcTemperatures = (...args) => {
	const arr = [];
	args.forEach((arg) => {
		arg.forEach((element) => {
			arr.push(element);
		});
	});
	console.log(arr);

	let maxTemp = Number.MIN_VALUE;
	let minTemp = Number.MAX_VALUE;

	arr.forEach((temp) => {
		if (typeof temp == 'number') {
			maxTemp = maxTemp > temp ? maxTemp : temp;
			minTemp = minTemp < temp ? minTemp : temp;
		}
	});

	const amplitude = maxTemp - minTemp;
	console.log('The amplitude is ' + amplitude);
};

calcTemperatures(temperatures);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const temperatures2 = [ 3, 5, 1, 0, 5, -33 ];
const temperatures3 = [ 33 ];

calcTemperatures(temperatures, temperatures2, temperatures3);

/**60. The debugging process
 * 1. Identify
 * 2. Find
 * 3. Fix it
 * 4. Prevent (search similar code)
 */

/**61. Debugging */

///////////////////////////////////////
// Debugging with the Console and Breakpoints
const measureKelvin = function() {
	const measurement = {
		type: 'temp',
		unit: 'celsius',
		// value: '10'
		value: Number('10') // fix the error
	};

	// B) FIND
	console.log(measurement.value);
	console.warn(measurement.value);
	console.error(measurement.value);
	console.table(measurement);

	// console.log(measurement.value);
	// console.warn(measurement.value);
	// console.error(measurement.value);

	const kelvin = measurement.value + 273;
	return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

// Debugger in google chrome
// sources and set breakpoints

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = function(arr) {
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		str += `${arr[i]}ºC in ${i + 1} days ... `;
	}
	console.log('...' + str);
};
printForecast([ 17, 21, 23 ]);
