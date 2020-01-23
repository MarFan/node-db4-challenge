const db = require('../../data/db-config');

module.exports = {
    list
}

function list(id) {
    return db('recipe_ingredients AS ri').join('recipes AS r', 'ri.recipeId', 'r.id').select('recipe_name').where('ri.ingredientId', id );
}