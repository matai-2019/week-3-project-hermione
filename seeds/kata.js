exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('kata').del()
    .then(function () {
      // Inserts seed entries
      return knex('kata').insert([
        { id: 1, name: 'boilerplate-knex', status: true, studentID: 1 },
        { id: 2, name: 'knex-forms-stories', status: true, studentID: 1 },
        { id: 3, name: 'knex-joins-stories', status: false, studentID: 1 },
        { id: 4, name: 'knex-relationships-stories', status: false, studentID: 1 },
        { id: 5, name: 'meowtown', status: false, studentID: 1 },
        { id: 6, name: 'pupparazzi', status: false, studentID: 1 },
        { id: 7, name: 'ascii-art-reader', status: true, studentID: 1 },
        { id: 8, name: 'knex-todo-cli', status: true, studentID: 1 },
        { id: 9, name: 'object-array-practice', status: false, studentID: 1 },
        { id: 10, name: 'server-side-rendering', status: true, studentID: 1 },
        { id: 11, name: 'heroku-checklist', status: true, studentID: 1 },
        { id: 12, name: 'express-server', status: false, studentID: 1 },
        { id: 13, name: 'conways', status: true, studentID: 1 },
        { id: 14, name: 'kata-objects-and-arrays', status: true, studentID: 1 },
        { id: 15, name: 'kata-types-modules', status: true, studentID: 1 },
        { id: 16, name: 'kata-strings-numbers-modules', status: true, studentID: 1 },
        { id: 17, name: 'bowling-kata', status: false, studentID: 2 },
        { id: 18, name: 'kata-data-structures', status: true, studentID: 2 },
        { id: 19, name: 'tdd-bowling-kata', status: true, studentID: 2 },
        { id: 20, name: 'two-truths-and-a-lie', status: true, studentID: 2 },
        { id: 21, name: 'boilerplate-knex', status: true, studentID: 2 },
        { id: 22, name: 'knex-forms-stories', status: true, studentID: 2 },
        { id: 23, name: 'knex-joins-stories', status: false, studentID: 2 },
        { id: 24, name: 'knex-relationships-stories', status: false, studentID: 2 },
        { id: 25, name: 'meowtown', status: false, studentID: 2 },
        { id: 26, name: 'pupparazzi', status: false, studentID: 2 },
        { id: 27, name: 'ascii-art-reader', status: true, studentID: 2 },
        { id: 28, name: 'knex-todo-cli', status: true, studentID: 2 },
        { id: 29, name: 'object-array-practice', status: false, studentID: 2 },
        { id: 30, name: 'server-side-rendering', status: true, studentID: 2 },
        { id: 31, name: 'heroku-checklist', status: true, studentID: 2 },
        { id: 32, name: 'express-server', status: false, studentID: 2 },
        { id: 33, name: 'conways', status: true, studentID: 2 },
        { id: 34, name: 'kata-objects-and-arrays', status: true, studentID: 2 },
        { id: 35, name: 'kata-types-modules', status: true, studentID: 2 },
        { id: 36, name: 'kata-strings-numbers-modules', status: true, studentID: 2 },
        { id: 37, name: 'bowling-kata', status: false, studentID: 2 },
        { id: 38, name: 'kata-data-structures', status: true, studentID: 2 },
        { id: 39, name: 'tdd-bowling-kata', status: true, studentID: 2 },
        { id: 40, name: 'two-truths-and-a-lie', status: true, studentID: 2 }
      ])
    })
}
