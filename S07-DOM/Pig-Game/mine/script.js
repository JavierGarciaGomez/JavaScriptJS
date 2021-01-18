'use strict';

// 83
const totalScore1El = document.querySelector('#score--0');
const totalScore2El = document.querySelector('#score--1');
const currScore1El = document.querySelector('#current--0');
const currScore2El = document.querySelector('#current--1');
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
let currScore1 = 0;
let currScore2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let activePlayer = 1;

totalScore1El.textContent = 0;
totalScore2El.textContent = 0;
dice.classList.add('hidden');

btnRoll.addEventListener('click', () => {
	let diceNum = Math.floor(Math.random() * 6) + 1;
	removeClass(dice, 'hidden');
	dice.src = 'dice-' + diceNum + '.png';
	if (diceNum !== 1) {
		changeScore(diceNum);
	} else {
		changeActivePlayer();
	}
});

btnHold.addEventListener('click', () => {
	if (activePlayer == 1) {
		totalScore1 += currScore1;
		totalScore1El.textContent = totalScore1;
		if (totalScore1 >= 100) {
			addClass(player1El, 'player--winner');
		}
	} else {
		totalScore2 += currScore2;
		totalScore2El.textContent = totalScore2;
		if (totalScore2 >= 100) {
			addClass(player2El, 'player--winner');
		}
	}
	changeActivePlayer();
});

btnNew.addEventListener('click', () => {
	removeClass(player1El, 'player--winner');
	removeClass(player2El, 'player--winner');
	removeClass(player2El, 'player--active');
	addClass(player1El, 'player--active');
	addClass(dice, 'hidden');
	totalScore1 = 0;
	totalScore2 = 0;
	totalScore1El.textContent = 0;
	totalScore2El.textContent = 0;
	activePlayer = 1;
});

function changeScore(diceNum) {
	if (activePlayer === 1) {
		currScore1 += diceNum;
		currScore1El.textContent = currScore1;
	} else {
		currScore2 += diceNum;
		currScore2El.textContent = currScore2;
	}
}

function changeActivePlayer() {
	setCurrScoreToZero();
	if (activePlayer === 1) {
		activePlayer = 2;
		removeClass(player1El, 'player--active');
		addClass(player2El, 'player--active');
	} else {
		activePlayer = 1;
		removeClass(player2El, 'player--active');
		addClass(player1El, 'player--active');
	}
}

function setCurrScoreToZero() {
	currScore1 = 0;
	currScore2 = 0;
	currScore1El.textContent = 0;
	currScore2El.textContent = 0;
}

function addClass(element, aClass) {
	if (!element.classList.contains(aClass)) {
		element.classList.add(aClass);
	}
}

function removeClass(element, aClass) {
	if (element.classList.contains(aClass)) {
		element.classList.remove(aClass);
	}
}
