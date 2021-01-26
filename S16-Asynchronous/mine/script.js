'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
console.log('********** 241. Asynchronous JavaScript AJAX **********');
/**
 * Most code is synchonous.
 * Synchronous code is executde line by line
 * This can have problems when the code takes time to execute
 *
 * ASYNC code is executed after a task that runs background finishes.
 * Async code is NON-BLOCKING
 *
 * AJAX: Asynchronous JavaScript And XML: Allows us to communicate remote in async way, requesting data from web servers dynamically
 *
 * API: Application Programmin Interface: piece of software that can be used by another piece of software
 */

console.log('********** 242. XHMLHttpRequest **********');
/*
// 242
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  // 242 waiting for the response
  request.addEventListener('load', function (e) {
    console.log(this);
    console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);

    // 242
    const html = `  
      <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${+Math.round(
            data.population / 1000000
          ).toFixed(1)} million people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>  
      `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

// 242
getCountryData('Mexico');
getCountryData('Spain');
getCountryData('Japan');
*/
console.log('********** 244. Callback hell **********');

const renderCountry = function (data, className = '') {
  // 242
  const html = `  
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(
              data.population / 1000000
            ).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>  
        `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryByCode = function (code) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/alpha/${code}`);
  request.send();
  request.addEventListener('load', function (e) {
    // Requiring data from country
    console.log(this.responseText);
    const data = JSON.parse(this.responseText);

    console.log(data);
    // Rendering main country
    renderCountry(data, 'neighbour');
  });
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  // 242 waiting for the response
  request.addEventListener('load', function (e) {
    // Requiring data from country
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Rendering main country
    renderCountry(data);
    const neighbours = data.borders;
    console.log(neighbours);
    neighbours.forEach(neighbour => getCountryByCode(neighbour));
  });
};

// getCountryAndNeighbour('Russia');

// CALLBACK HELL
// setTimeout(() => {
//     console.log('1 second passed');
//     setTimeout(() => {
//       console.log('2 seconds passed');
//       setTimeout(() => {
//         console.log('3 second passed');
//         setTimeout(() => {
//           console.log('4 second passed');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);

console.log('********** 245. Promises and fetch API **********');
/**
 * PROMISE: a container for an asynchronously delivered value
 * Advantages:
 *      We no longer need to rely on events and callbacks
 *      Instead of nesting, we can chain promises for a sequence of async operations: ESCAPING CALLBACK HELL
 *
 * PROMISE LIFECYCLE
 *      PENDING
 *      SETTLED
 *              FULFILLED
 *              REJECTED
 */

/* Old way
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
request.send();

request.addEventListener('load', function (e) {
  const [data] = JSON.parse(this.responseText);
});
*/

// FETCH (PROMISE)
// const request = fetch('https://restcountries.eu/rest/v2/name/Mexico');
// console.log(request);

console.log('********** 246. Consuming promises **********');
const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    //   Handling the promise
    .then(response =>
      //   we need to handle this too, because is also a promise
      response.json()
    )
    // Handling the json promise
    .then(function ([data]) {
      console.log(data);
      renderCountry(data);
    });
};

// getCountryData('Mexico');

console.log('********** 247. Chaining promises **********');
const getCountryData247 = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(function ([data]) {
      renderCountry(data);
      const neighbour = data.borders[0];
      if (!neighbour) return;

      //   Country 2
      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(newCountry => renderCountry(newCountry, 'neighbour'));
};

// getCountryData247('Germany');

console.log('********** 248. Handling Rejected Promises **********');
console.log('********** 249. Throwing errors manually **********');
btn.addEventListener('click', function () {
  getCountryData248('Germany');
});

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(errorMsg + response.status);
    }
    return response.json();
  });
};

const getCountryData248 = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    'Country not found'
  )
    .then(function ([data]) {
      renderCountry(data);
      const neighbour = data.borders[0];
      if (!neighbour) throw new Error('No neighbour found');
      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(newCountry => renderCountry(newCountry, 'neighbour'))
    // HANDLING ERRORS
    .catch(function (err) {
      renderError(err);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

console.log('********** 250. Coding challenge #1 **********');
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(20.9688, -89.6634);
*/

console.log('********** 251. The Event Loop **********');

///////////////////////////////////////
// The Event Loop in Practice
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('Test end');
