
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        { id: 1, quantity: 1, recipe_id: 1, ingredient_id: 1 },
        { id: 2, quantity: 2, recipe_id: 1, ingredient_id: 2 },
        { id: 3, quantity: 1, recipe_id: 1, ingredient_id: 3 },
        { id: 4, quantity: 1, recipe_id: 2, ingredient_id: 3 },
        { id: 5, quantity: 0.5, recipe_id: 2, ingredient_id: 4 },
        { id: 6, quantity: 0.25, recipe_id: 2, ingredient_id: 5 },
        { id: 7, quantity: 0.1, recipe_id: 3, ingredient_id: 6 },
        { id: 8, quantity: 2, recipe_id: 3, ingredient_id: 7 }

      ]);
    });
};
