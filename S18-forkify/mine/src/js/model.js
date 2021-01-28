// 286

export const state = {
  recipe: {},
};

// 286
export const loadRecipe = async function (id) {
  try {
    // this will return a promise
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    // convert the data to json
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    console.log('res', res);
    console.log('data', data);
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
    alert(error);
  }
};
