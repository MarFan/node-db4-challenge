
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name', 128).notNullable();
      tbl.text('steps');
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient', 128).notNullable();
  })
  .createTable('recipe_steps', tbl => {
        tbl.increments();
        tbl.string('step_description').notNullable();
        tbl.integer('recipeId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes');
        tbl.integer('step_order').notNullable();
  })
  .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipeId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
        tbl.integer('ingredientId')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients');
        tbl.float('measurement').notNullable();
        tbl.string('measurementType').notNullable();  // t, T, Cup(s)
        tbl.integer('ingredientOrder')
  })
};

exports.down = function(knex) {
  
};
