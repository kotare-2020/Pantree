exports.up = function (knex) {
  return knex.schema.createTable("plans_recipes", (table) => {
    table.integer("plan_id")
    table.integer("day_number")
    table.integer("recipe_id")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("plans_recipes")
}
