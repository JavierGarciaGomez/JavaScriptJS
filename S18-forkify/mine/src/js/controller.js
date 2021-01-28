// 279 pollifill
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// 286
// import everything
import * as model from './model.js';
import recipeView from './views/recipeView.js';
// 279

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// 278, 279, 284, 286
const controlRecipe = async function () {
  try {
    // 284 getting hash id from window
    const id = window.location.hash.slice(1);
    console.log(id);
    // is smth went wrong with id return
    if (!id) return;

    // 279 render spinner
    recipeView.renderSpinner();

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
