const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/login')
})

router.post('/login', (req, res) => {
  // get name from req.body
  const name = req.body.name

  db.getUserByName(name)
    .then(user => {
      res.redirect(`/students/${user.id}`)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
router.get('/students/:studentId/:assId', (req, res) => {
  const studentId = req.params.studentId
  const assId = req.params.assId
  // res.send('hi')
  // db.getAss(studentId, assId)
  //   .then(ass => {
  //     // res.render('ass.hbs', ass)
  //     res.send('hi')
  //   })
  //   .catch(err => {
  //     res.status(500).send('DATABASE ERROR: ' + err.message)
  //   })
})

// router.put('/students/:studentId/:assId', (req, res) => {
//   const status = req.body.status
//   const studentId = req.params.studentId
//   const assId = req.params.assId

//   db.updateAss(status, assId)
//     .then(ass => {
//       res.redirect(`/students/${studentId}/${assId}`)
//     })
// })

router.get('/students/:studentId', (req, res) => {
  const id = req.params.studentId
  // res.send(`<h1>${id}</h1>`)
  db.getUserAsses(id)
    .then(asses => {
      res.render('katas', { asses })
      // res.send(asses)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/login', (req, res) => {
  res.render('login')
})

module.exports = router
