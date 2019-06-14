const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  joinDetails,
  getUserByName,
  getUserAsses,
  getAss
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function getUserByName (name, db = connection) {
  return db('users').where('name', name).first()
}
function getUserAsses (studentId, db = connection) {
  return db('kata')
    .select('kata.name', 'kata.id', 'kata.studentId')
    .where('kata.studentId', studentId)
}

function getAss (assId, db = connection) {
  return db('kata')
    .join('users', 'kata.studentID', `users.id`)
    .select('kata.status', 'kata.name')
    .where('kata.id', assId)
    .first()
}

function updateAss (status, assId, db = connection) {
  return db('kata')
    .join('users', 'kata.studentID', `users.id`)
    .select('kata.status', 'kata.name')
    .where('kata.id', assId)
    .first()
}

function joinDetails (kataID, userID, db = connection) {
  return db('status')
    .select()
    .join('users', 'status.StudentID', '=', 'users.id')
    .join('katas', 'status.KataID', '=', 'kata.id')
    .where('kata.id', kataID)
    .where('users.id', userID)
}
