
exports.up = function(knex) {
    return knex.schema.createTable('recipes', (table) => {
        table.increments('id').primary()
        table.string('recipe')
        table.string('image')
        table.string('method')
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('recipes')
}