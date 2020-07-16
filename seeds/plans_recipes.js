
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plans_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('plans_recipes').insert([
        {plan_id: 1, day_number: 1, recipe_id:1},
        {plan_id: 2, day_number: 1, recipe_id:2},
        {plan_id: 3, day_number: 3, recipe_id:3},
        {plan_id: 4, day_number: 5, recipe_id:1},
        {plan_id: 4, day_number: 5, recipe_id:2},
        {plan_id: 2, day_number: 5, recipe_id:3},
        {plan_id: 1, day_number: 7, recipe_id:1},
      ]);
    });
};
