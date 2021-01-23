'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 179
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log('********** 180. How the dom works **********');
/**Every single node of the dom tree is of type node, and in JS is represented in an object
 * All node has common properties: textContent, childnotes...
 * Four type of nodes: element, text, comment and document
 * Each element type has methods and properties: innerHTML, classList, parentElement, append(), remove...
 *    Each element has different types, for example an img has special methods.
 * Text <p> this text </p>
 * Comment <!-->
 * Document .querySelector() createElement() getElementbyID();
 */

console.log(
  '********** 181. Selecting, creating & deleting elements **********'
);
console.log('+++++ Selecting +++++');
console.log(
  '-----For the full html, head and body We dont need special selectors'
);
console.log('+++++ documentElement +++++');
console.log('documentElement', document.documentElement);
console.log('head', document.head);
console.log('body', document.body);
console.log('+++++ querySelector +++++');
console.log('querySelector', document.querySelector('.header'));
console.log('querySelectorAll', document.querySelectorAll('.section'));

console.log('+++++ getElementbyId, Class, Name +++++');
console.log('getElementById', document.getElementById('section--1'));
console.log('getElementsByTagName', document.getElementsByTagName('button'));
console.log('getElementByClassName', document.getElementsByClassName('btn'));

console.log('+++++ Creating +++++');
// .insertAdjacentHTML()

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionallity and analytics';
message.innerHTML =
  'We use cookies for improved functionallity and analytics. <button class="btn btn--close-cookie">Got it! </button>';
const header = document.querySelector('.header');

console.log('+++++ prepend(), append(), before(), after() +++++');
// header.prepend(message);
// header.append(message.cloneNode(true));
header.append(message);
// before and after make siblings
// header.before(message);
// header.after(message);

console.log('+++++ Deleting +++++');
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

console.log('********** 182. Styles, attributes and classes **********');
console.log('+++++ Styles +++++');
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// We cant read styles that are in a class, just the inline styles, but We can use getComputedStyle
console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log('+++++ getComputedStyle +++++');
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// incrementing the height style
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

console.log('+++++ Styles: custom properties +++++');
// custom properties are the internal variables of css
document.documentElement.style.setProperty('--color-primary', 'orangered');

console.log('+++++ Attributes +++++');
const logo = document.querySelector('.nav__logo');
console.log(logo);
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
// Getting custom attributes
console.log(logo.getAttribute('designer'));
// settting attributes
logo.setAttribute('alt', 'Alt changed with JS');
console.log(logo.alt);

console.log('+++++ Data Attributes +++++');
// data-version-number='3.0'
console.log(logo.dataset.versionNumber);

console.log('+++++ Classes +++++');
logo.classList.add('test');
logo.classList.remove('test');
logo.classList.toggle('test');
logo.classList.contains('test');

console.log('********** 183. Implementing smooth scrolling **********');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

console.log('+++++ gettingSizes +++++');
btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  console.log('+++++ scrollTo() +++++');
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  console.log('+++++ smoother scrollTo() +++++');
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  console.log('+++++ modern way: scrollIntoView() +++++');
  section1.scrollIntoView({ behavior: 'smooth' });
});

console.log('********** 184. Types of events and event handlers **********');
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

console.log('+++++ mouseenter +++++');
h1.addEventListener('mouseenter', alertH1);

console.log('+++++ removeEventListener +++++');
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// Add eventlistener is better than on{event}, because it let us add multiple events and because it let us to remove it

console.log('********** 185. Bubbling and capturing **********');
/**
 * Phases
 *
 * 1. capturing phase: reaches the target
 * 2. target phase: the target that triggers the event
 * 3. bubbling phase: the event travels all the way up from the target to the document route again, travels to all the parent elements
 *
 *
 */

console.log('********** 186. Event propagation in practice **********');
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('link');
});
