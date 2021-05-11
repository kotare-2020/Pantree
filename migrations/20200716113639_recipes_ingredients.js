
exports.up = function(knex) {
    return knex.schema.createTable('recipes_ingredients', (table) => {
        table.increments('id').primary()
        table.decimal('quantity', 8, 2)
        table.integer('recipe_id')
        table.integer('ingredient_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('recipes_ingredients')
};
