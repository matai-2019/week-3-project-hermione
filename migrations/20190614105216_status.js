exports.up = function (knex, Promise) {
  return knex.schema.createTable('status', (table) => {
    table.increments('id').primary()
    table.integer('StudentID')
    table.integer('KataID')
    table.boolean('Status')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('status')
}
