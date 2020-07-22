
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { id: 1, quantity: 1, recipe_id: 1, ingredient_id: 1 },
        { id: 2, quantity: 2, recipe_id: 1, ingredient_id: 2 },
        { id: 3, quantity: 1, recipe_id: 1, ingredient_id: 3 },
        { id: 4, quantity: 1, recipe_id: 3, ingredient_id: 3 },
        { id: 5, quantity: 0.50, recipe_id: 3, ingredient_id: 4 },
        { id: 6, quantity: 0.25, recipe_id: 3, ingredient_id: 5 },
        { id: 7, quantity: 0.10, recipe_id: 2, ingredient_id: 6 },
        { id: 8, quantity: 2, recipe_id: 2, ingredient_id: 7 },
        { id: 9, quantity: 2, recipe_id: 4, ingredient_id: 8 },
        { id: 10, quantity: 0.25, recipe_id: 4, ingredient_id: 9 },
        { id: 11, quantity: 0.01, recipe_id: 4, ingredient_id: 10 },
        { id: 12, quantity: 2, recipe_id: 4, ingredient_id: 7 },
        { id: 13, quantity: 0.15, recipe_id: 5, ingredient_id: 11 },
        { id: 14, quantity: 0.12, recipe_id: 5, ingredient_id: 12 },
        { id: 15, quantity: 0.40, recipe_id: 5, ingredient_id: 13 },
        { id: 16, quantity: 0.10, recipe_id: 5, ingredient_id: 14 },
        { id: 17, quantity: 0.20, recipe_id: 5, ingredient_id: 15 },
        { id: 18, quantity: 12, recipe_id: 5, ingredient_id: 16 },
        { id: 19, quantity: 1, recipe_id: 6, ingredient_id: 3 },
        { id: 20, quantity: 2, recipe_id: 6, ingredient_id: 2 },
        { id: 21, quantity: 0.80, recipe_id: 6, ingredient_id: 17 },
        { id: 22, quantity: 0.40, recipe_id: 6, ingredient_id: 18 },
        { id: 23, quantity: 0.40, recipe_id: 6, ingredient_id: 19 },
        { id: 24, quantity: 2, recipe_id: 6, ingredient_id: 20 },

      ]);
    });
};
