exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('kata').del()
    .then(function () {
      // Inserts seed entries
      return knex('kata').insert([
        { id: 1, name: 'boilerplate-knex', status: 1 },
        { id: 2, name: 'knex-forms-stories', status: 1 },
        { id: 3, name: 'knex-joins-stories', status: 0 },
        { id: 4, name: 'knex-relationships-stories', status: 0 },
        { id: 5, name: 'meowtown', status: 0 },
        { id: 6, name: 'pupparazzi', status: 0 },
        { id: 7, name: 'ascii-art-reader', status: 1 },
        { id: 8, name: 'knex-todo-cli', status: 1 },
        { id: 9, name: 'object-array-practice', status: 0 },
        { id: 10, name: 'server-side-rendering', status: 1 },
        { id: 11, name: 'heroku-checklist', status: 1 },
        { id: 12, name: 'express-server', status: 0 },
        { id: 13, name: 'conways', status: 1 },
        { id: 14, name: 'kata-objects-and-arrays', status: 1 },
        { id: 15, name: 'kata-types-modules', status: 1 },
        { id: 16, name: 'kata-strings-numbers-modules', status: 1 },
        { id: 17, name: 'bowling-kata', status: 0 },
        { id: 18, name: 'kata-data-structures', status: 1 },
        { id: 19, name: 'tdd-bowling-kata', status: 1 },
        { id: 20, name: 'two-truths-and-a-lie', status: 1 }
      ])
    })
}
