
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'Frozen Chicken'},
        {ingredient: 'Chicken broth'},
        {ingredient: 'Tomato paste'},
        {ingredient: 'Rolled Oats'},
        {ingredient: 'Nuts'},
        {ingredient: 'Worchestershire Sauce'},
        {ingredient: 'Flour'},
        {ingredient: 'Eggs'},
        {ingredient: 'Garlic'},
        {ingredient: 'Cheese'},
        {ingredient: 'Rice'},
        {ingredient: 'Onion'},
        {ingredient: 'Yogurt'},
        {ingredient: 'Vegatible Oil'},
        {ingredient: 'Apple Cider Vinegar'},
        {ingredient: 'Sweet Potatoes'},
        {ingredient: 'Maple Syrup'},
        {ingredient: 'Beans'},
        {ingredient: 'Lemon'},
        {ingredient: 'Tuna'},
        {ingredient: 'Ground Meat'},
        {ingredient: 'Allspice'},
        {ingredient: 'Apple Pie Spice'},
        {ingredient: 'Basil'},
        {ingredient: 'Bay leaves'},
        {ingredient: 'Cayenne'},
        {ingredient: 'Chili Powder'},
        {ingredient: 'Ground Cinnamon'},
        {ingredient: 'Cinnamon Sticks'},
        {ingredient: 'Cloves'},
        {ingredient: 'Cumin'},
        {ingredient: 'Curry Powder'},
        {ingredient: 'Dill Weed'},
        {ingredient: 'Garlic Powder'},
        {ingredient: 'Ground Ginger'},
        {ingredient: 'Ground Nutmeg'},
        {ingredient: 'Onion Powder'},
        {ingredient: 'Oregano'},
        {ingredient: 'Paprika'},
        {ingredient: 'Black Peppercorns'},
        {ingredient: 'Red Pepper Flakes'},
        {ingredient: 'Rosemary'},
        {ingredient: 'Saffron'},
        {ingredient: 'Sage'},
        {ingredient: 'Tarragon'},
        {ingredient: 'Thyme'},
        {ingredient: 'Vannila Extract'},
        {ingredient: 'Vannila Beans'}
      ]);
    });
};
