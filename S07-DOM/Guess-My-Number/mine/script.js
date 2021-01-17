'use strict';

/**70. Project#1 Guess mu number
 */

/**71. What's DOM manipulation
 * DOM: Document object model
 * 
 */

/**72. Selecting and manipulating
 */

/*document.querySelector('.message').textContent = 'Changed with querySelector: 🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/**73. Handling events
 */

const guessField = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const numberField = document.querySelector('.number');
const msgField = document.querySelector('.message');
const scoreField = document.querySelector('.score');
const highScoreField = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');
let highScore = 0;
let score = 20;
let randomNum = Math.floor(Math.random() * 20) + 1;

console.log(randomNum);

checkBtn.addEventListener('click', () => {
	const capturedNum = Number(guessField.value);
	if (!capturedNum || capturedNum > 20 || capturedNum < 0) {
		msgField.textContent = '🚫 Not a valid number';
		return;
	}

	console.log(randomNum, capturedNum);
	if (randomNum === capturedNum) {
		document.querySelector('body').classList.add('winnerBg');
		numberField.textContent = randomNum;
		highScore = highScore > score ? highScore : score;
		highScoreField.textContent = highScore;
		msgField.textContent = 'correct number';
	} else {
		if (score === 0) {
			msgField.textContent = '🤔 You lost the game';
			return;
		}
		score--;
		scoreField.textContent = score;
		msgField.textContent = randomNum > capturedNum ? '📉 Too low' : '📈 Too high';
	}
	console.log(capturedNum);
});

againBtn.addEventListener('click', () => {
	score = 20;
	scoreField.textContent = score;
	document.querySelector('body').classList.remove('winnerBg');
	msgField.textContent = 'Start guessing...';
	guessField.value = '';
	numberField.textContent = '?';
});
