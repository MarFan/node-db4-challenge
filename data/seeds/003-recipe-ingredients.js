
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipeId: 1, ingredientId: 1, measurement: 3, measurementType: 'pounds', ingredientOrder: 1},
        {recipeId: 1, ingredientId: 5, measurement: 1, measurementType: 'Cup', ingredientOrder: 2},
        {recipeId: 1, ingredientId: 13, measurement: .66, measurementType: 'T', ingredientOrder: 3},
        {recipeId: 2, ingredientId: 22, measurement: .5, measurementType: 't', ingredientOrder: 1},
        {recipeId: 2, ingredientId: 3, measurement: 1, measurementType: 'Cup', ingredientOrder: 2},
        {recipeId: 2, ingredientId: 37, measurement: .5, measurementType: 'T', ingredientOrder: 3},
        {recipeId: 3, ingredientId: 44, measurement: 3, measurementType: 't', ingredientOrder: 1},
        {recipeId: 3, ingredientId: 34, measurement: 3, measurementType: 'Cup', ingredientOrder: 2},
        {recipeId: 3, ingredientId: 24, measurement: .5, measurementType: 'T', ingredientOrder: 3}
      ]);
    });
};
