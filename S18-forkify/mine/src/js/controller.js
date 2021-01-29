// 279 pollifill
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// 286
// import everything
import * as model from './model.js';
import recipeView from './views/recipeView.js';
// 290, 291, 293, 298
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';

// 291
// if (module.hot) {
//   module.hot.accept();
// }

// 278, 279, 284, 286, 289, 296
const controlRecipe = async function () {
  try {
    // 284 getting hash id from window
    const id = window.location.hash.slice(1);
    console.log(id);
    // is smth went wrong with id return
    if (!id) return;

    // 279 render spinner
    recipeView.renderSpinner();

    // 0) update results view to mark selected search result
    // 296
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // 1) Loading recipe
    // 286
    await model.loadRecipe(id); // this function is async so it will return a promise and We have to wait for it

    // 2) Displaying recipe
    recipeView.render(model.state.recipe); // this calls a new RecipeView
  } catch (err) {
    // 289
    console.error(err);
    recipeView.renderError();
  }
};
// 278
// showRecpe();

// 290
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // 1 Get search query
    const query = searchView.getQuery();
    if (!query) return;
    // 2 Load search results
    await model.loadSearchResults(query);
    // 3 Render results
    // ..., 292
    resultsView.render(model.getSearchResultsPage(1));
    // 293
    // 4 Render initial pagination
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

// 293
const controlPagination = function (goToPage) {
  // RENDER NEW results and NEW pagination
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
};

// 295
const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);
  // Update the recipe view
  recipeView.update(model.state.recipe);
};

// 297, 298
const controlAddBookmark = function () {
  // 1) Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

// 299
const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

// 288, 295
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipe);
  // 295, 297, 299
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();
