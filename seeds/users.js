exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, name: 'Ash' },
        { id: 2, name: 'Andre' },
        { id: 3, name: 'Anisha' },
        { id: 4, name: 'Celia' },
        { id: 5, name: 'David B' },
        { id: 6, name: 'David N' },
        { id: 7, name: 'Keith' },
        { id: 8, name: 'Jennie' },
        { id: 9, name: 'Joanna' },
        { id: 10, name: 'Jared' },
        { id: 11, name: 'Raaya' },
        { id: 12, name: 'Rahul' },
        { id: 13, name: 'Ruslan' },
        { id: 14, name: 'Taine' },
        { id: 15, name: 'Tamari' },
        { id: 16, name: 'Noel' }
      ])
    })
}
