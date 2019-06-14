exports.up = function (knex, Promise) {
  return knex.schema.createTable('kata', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('status')
    table.string('studentID')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('kata')
}
