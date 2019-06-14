const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getUserByName,
  getAss,
  getUserAsses,
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
function getUserAsses (studentId, db = connection) {
  return db('katas')
    .select()
    .where('student_id', studentId)
}

function getAss (studentId, assId, db = connection) {
  // const asses = getUserAsses(studentId)
  // let assesment = ''

  // console.log(asses)

  // asses.find(ass => {
  //   if (ass.id === assId) {
  //     assesment = ass
  //   }
  // })

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
