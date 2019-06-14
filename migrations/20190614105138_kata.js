exports.up = function (knex, Promise) {
  return knex.schema.createTable('kata', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.boolean('status')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('kata')
}
