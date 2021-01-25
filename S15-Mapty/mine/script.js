'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

console.log('********** 226 How to plan a web project **********');
/**
 * 1. User stories: description of the app from the user's perspective.
 * 2. Features:
 * 3. Flowachert
 * 4. Architecture
 * 5. Development
 *
 * 1. User stories
 * -As a (user) i want (action) so that (benefit)
 */
console.log('********** 227 Using the GeoLocation API **********');
let map;
let mapEvent;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      console.log(position);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      console.log('********** 228 Displaying a map with Leaflet **********');

      map = L.map('map').setView(coords, 13);

      L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      //   handling clicks on map
      //   229, 230
      map.on('click', function (e) {
        mapEvent = e;
        form.classList.remove('hidden');
        inputDistance.focus();

        //   229
      });
    },
    function () {
      alert('Could not get your position');
    }
  );

  //   229, 230
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // clear form
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
      '';
    // Display marker
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('workout')
      .openPopup();
  });
}

// 230
inputType.addEventListener('change', function (e) {
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});
