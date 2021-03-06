// 287
import { API_URL, RESULTS_PER_PAGE, KEY } from './config.js';
// import { getJSON, sendJSON } from './helpers.js';
import recipeView from './views/recipeView.js';
// 303
import { AJAX } from './helpers.js';

// 286, 297
export const state = {
  recipe: {},
  search: { query: '', results: [], page: 1, resultsPerPage: RESULTS_PER_PAGE },
  bookmarks: [],
};

// 302
const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

// 286, 287, 302
export const loadRecipe = async function (id) {
  try {
    // 287
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);

    // 297
    if (state.bookmarks.some(bookmark => bookmark.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
    console.log(state.recipe);
  } catch (error) {
    // 289
    throw error;
  }
};

// 290, 297
export const loadSearchResults = async function (query) {
  try {
    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    console.log('LoadResults', data);

    // 290 saving to state
    state.search.query = query;
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
      };
    });
    // 297
    state.search.page = 1;
  } catch (err) {
    throw error;
  }
};

// 292
export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

// loadSearchResults('pizza');

// 295
export const updateServings = function (newServings) {
  const originalServings = state.recipe.servings;
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / originalServings;
  });
  state.recipe.servings = newServings;
};

// 299
const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

// 299
const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();
console.log(state.bookmarks);

// 297
export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

// 297
export const deleteBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

// 299
const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();

// 302
export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].split(',').map(el => el.trim());
        // const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient fromat! Please use the correct format'
          );

        const [quantity, unit, description] = ingArr;

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    console.log('INGREDIENTS', ingredients);
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    console.log('Recipe', recipe);
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    console.log('DATA POST REQUEST', data);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
    /*


    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);

    */
  } catch (err) {
    throw err;
  }
};
