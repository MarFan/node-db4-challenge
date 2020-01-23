const db = require('../../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('recipe_ingredients AS ri').join('ingredients AS i','ri.ingredientId', 'i.id').where('ri.recipeId', id).select('i.ingredient', 'ri.measurement', 'ri.measurementType')
}

function getInstructions(id) {
    return db('recipes').select('steps').where({id});
}