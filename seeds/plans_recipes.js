
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plans_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('plans_recipes').insert([
        {plan_id: 11, day_number: 1, recipe_id:21},
        {plan_id: 11, day_number: 1, recipe_id:22},
        {plan_id: 11, day_number: 3, recipe_id:42},
        {plan_id: 12, day_number: 5, recipe_id:42},
        {plan_id: 12, day_number: 5, recipe_id:63},
        {plan_id: 12, day_number: 5, recipe_id:63},
        {plan_id: 13, day_number: 7, recipe_id:21},
      ]);
    });
};
