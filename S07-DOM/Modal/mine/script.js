'use strict';

// 79

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

// 80
btnsShowModal.forEach((btn) => {
	btn.addEventListener('click', () => {
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');
	});
});

btnCloseModal.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModal);
overlay.addEventListener('click', closeModal);

function closeModal(event) {
	console.log(event.key);
	console.log(event.type);
	if (event.type === 'click' || event.key === 'Escape') {
		modal.classList.add('hidden');
		overlay.classList.add('hidden');
	}
}
