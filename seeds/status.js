/*
table.increments('id').primary()
table.integer('StudentID')
table.integer('KataID')
table.boolean('Status')
*/

exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, StudentID: 7, KataID: 6, Status: false },
        { id: 2, StudentID: 15, KataID: 12, Status: true }
        /*
        { id: 3, StudentID: 14, KataID: 8, Status: false },
        { id: 4, StudentID: 16, KataID: 16, Status: true },
        { id: 5, StudentID: 11, KataID: 13, Status: false },
        { id: 6, StudentID: 2, KataID: 8, Status: false },
        { id: 7, StudentID: 13, KataID: 8, Status: true },
        { id: 7, StudentID: 7, KataID: 19, Status: true },

        { id: 9, StudentID: 3, KataID: 1, Status: false },
        { id: 10, StudentID: 4, KataID: 3, Status: true },
        { id: 11, StudentID: 12, KataID: 16, Status: true },
        { id: 12, StudentID: 16, KataID: 3, Status: true },
        { id: 13, StudentID: 2, KataID: 20, Status: false },
        { id: 14, StudentID: 9, KataID: 7, Status: true },
        { id: 15, StudentID: 14, KataID: 2, Status: false },
        { id: 16, StudentID: 16, KataID: 1, Status: false },

        { id: 17, StudentID: 3, KataID: 11, Status: false },
        { id: 18, StudentID: 8, KataID: 15, Status: true },
        { id: 19, StudentID: 6, KataID: 9, Status: true },
        { id: 20, StudentID: 8, KataID: 1, Status: false },
        { id: 21, StudentID: 14, KataID: 19, Status: false },
        { id: 22, StudentID: 6, KataID: 15, Status: false },
        { id: 23, StudentID: 4, KataID: 10, Status: false },
        { id: 24, StudentID: 5, KataID: 7, Status: true }
        */

      ])
    })
}