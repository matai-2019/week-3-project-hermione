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
  return db('students').select()
}

function getUser (id, db = connection) {
  return db('students').where('id', id).first()
}

function getUserByName (name, db = connection) {
  return db('students').where('name', name).first()
}
function getUserAsses (studentId, db = connection) {
  return db('katas')
    .select()
    .where('student_id', studentId)
}

function getAss (studentId, assId, db = connection) {
  return db()
  // return db('katas')
  //   .join('students', 'katas.student_id', `students.id`)
  //   .select('katas.status')
  //   .where('katas.id', assId)
  //   .first()
}

function updateAss (status, assId, db = connection) {
  // return db('katas')
  //   .join('students', 'katas.student_id', 'students.id')
  //   .where('katas.id', assId)
  //   .update({
  //     status: status
  //   })
}

function joinDetails (kataID, userID, db = connection) {
  return db('status')
    .select()
    .join('users', 'status.StudentID', '=', 'users.id')
    .join('katas', 'status.KataID', '=', 'kata.id')
    .where('kata.id', kataID)
    .where('users.id', userID)
}
