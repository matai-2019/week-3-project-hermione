const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUserByName,
  getAss,
  updateAss
}

function getUsers (db = connection) {
  return db('students').select()
}

function getUser (id, db = connection) {
  return db('students').where('id', id).first()
}

function getUserByName (name, db = connection) {
  return db('students').where('name', name).first()
}

function getAss (studentId, assId) {
  return db('students')
    // .join('')
    // .where('')
}

function updateAss (studentId, assId) {
  // return db('students')
  
}
