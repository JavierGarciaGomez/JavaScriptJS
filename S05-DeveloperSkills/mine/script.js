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

const calcTemperatures = (arr) => {
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

const temperatures2 = [ 3, 5, 1, 0, 5 ];
