exports.up = function (knex) {
  return knex.schema.createTable("plans", (table) => {
    table.increments("id").primary()
    table.integer("user_id")
    table.string("name")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("plans")
}
