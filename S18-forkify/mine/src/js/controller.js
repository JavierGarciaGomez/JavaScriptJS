import icons from 'url:../img/icons.svg';
// 279 pollifill
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// 286
// import everything
import * as model from './model.js';
import recipeView from './views/recipeView.js';

console.log(icons);
// 279

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// 279 spinner
const renderSpinner = function (parentElement) {
  const markup = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
  parentElement.innerHTML = '';
  parentElement.insertAdjacentHTML('afterbegin', markup);
};

// 278, 279, 284
const showRecipe = async function () {
  try {
    // 284 getting hash id from window
    const id = window.location.hash.slice(1);
    console.log(id);
    // is smth went wrong with id return
    if (!id) return;

    // 279 render spinner
    renderSpinner(recipeContainer);
    // 1) Loading recipe
    // 286
    await model.loadRecipe(id); // this function is async so it will return a promise and We have to wait for it

    // 2) Displaying recipe
    recipeView.render(model.state.recipe); // this calls a new RecipeView
  } catch (err) {
    alert(err);
  }
};
// 278
// showRecpe();

// 284 add listeners to left menu
// when a link is selected hashChange, when the url is typed load: USING EVENTS AS ARRAY
['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
