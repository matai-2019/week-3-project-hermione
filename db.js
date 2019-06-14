const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  joinDetails: joinDetails
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function joinDetails (kataID, userID, db = connection) {
  return db('status')
    .select()
    .join('users', 'status.StudentID', '=', 'users.id')
    .join('katas', 'status.KataID', '=', 'kata.id')
    .where('kata.id', kataID)
    .where('users.id', userID)
}
