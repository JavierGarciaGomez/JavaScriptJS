// 287
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
// 286

export const state = {
  recipe: {},
};

// 286, 287
export const loadRecipe = async function (id) {
  try {
    // 287
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    //   286 changed to state.recipe
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (error) {
    console.error(error);
  }
};
