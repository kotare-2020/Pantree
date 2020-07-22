
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
        {id: 8, name: 'very ripe bananas', unit: 'each'},
        {id: 9, name: 'almond flour', unit: 'kg'},
        {id: 10, name: 'cinnamon', unit: 'kg'},
        {id: 11, name: 'frozen peas', unit: 'kg'},
        {id: 12, name: 'baby spinach', unit: 'kg'},
        {id: 13, name: 'canned chickpeas', unit: 'kg'},
        {id: 14, name: 'cherry tomatoes', unit: 'kg'},
        {id: 15, name: 'hummus with beetroot & roasted garlic', unit: 'kg'},
        {id: 16, name: 'pitted black olives', unit: 'each'},
        {id: 17, name: 'canned chopped tomatoes', unit: 'kg'},
        {id: 18, name: 'canned black beans', unit: 'kg'},
        {id: 19, name: 'canned kidney beans', unit: 'kg'},
        {id: 20, name: 'celery sticks', unit: 'each'},
      ]);
    });
};
