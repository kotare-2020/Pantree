
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plans').del()
    .then(function () {
      // Inserts seed entries
      return knex('plans').insert([
        // May need to change user_id
        {id: 1, user_id:1, name:"Ben"},
        {id: 2, user_id:2, name:"Joe"},
        {id: 3, user_id:3, name:"Jeff"},
        {id: 4, user_id:4, name:"Rose"},
        {id: 5, user_id:5, name:"Aiysha"},
        {id: 6, user_id:6, name:"Fai"},
      ]);
    });
};
