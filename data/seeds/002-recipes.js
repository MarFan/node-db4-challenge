
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'BBQ Chicken', steps: 'Preheat oven to 425 degrees F. Lay sweet potatoes cut side up on a large baking sheet. Roast until tender, about 35 minutes, depending on size of your potatoes. In a saucepan set to medium-low, stir together chicken and BBQ sauce. Heat until warm, 5-10 minutes. Top each potato with scoopfuls of chicken. Spoon over additional BBQ sauce and sprinkle with chopped parsley or sliced green onions, if desired.'},
        {recipe_name: 'Baked Ham and Cheese Rollups', steps: 'Preheat oven to 400 degrees F. Roll out pizza dough on a lightly floured surface. Press to form a 12 x 8-inch rectangle. Arrange ham slices evenly over dough to within 1/2 inch of edges. Sprinkle evenly with cheese. Starting at one of the short ends, roll up dough to form log. Pinch seam together to seal. Place, seam side down, on a greased baking sheet. Bake for 50 minutes, or until deep golden brown. Let stand 10 minutes before cutting into 8 slices with a serrated knife. Serve with mustard or horseradish sauce, if desired.'},
        {recipe_name: 'Black Bean Soup', steps: 'Combine all ingredients in a medium pot. Bring to a boil and simmer for 10 minutes. Remove from stove and blend using an immersion blender or a traditional blender.'}
      ]);
    });
};