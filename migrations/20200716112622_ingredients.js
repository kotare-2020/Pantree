
exports.up = function(knex) {
    return knex.schema.createTable('ingredients', (table) => {
        table.increments('id').primary()
        table.string('name')
        table.string('unit')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('ingredients')
};
