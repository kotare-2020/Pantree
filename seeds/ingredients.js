
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'steak', unit: 'kg'},
        {id: 2, name: 'carrot', unit: 'each'},
        {id: 3, name: 'onion', unit: 'each'},
        {id: 4, name: 'pumpkin', unit: 'each'},
        {id: 5, name: 'cream', unit: 'kg'},
        {id: 6, name: 'flour', unit: 'kg'},
        {id: 7, name: 'egg', unit: 'each'},
      ]);
    });
};
