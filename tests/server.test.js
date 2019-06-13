const request = require('supertest')
const cheerio = require('cheerio')

jest.mock('../db', () => ({
  getUser: (id) => Promise.resolve(
    { id: id, name: 'test user', email: 'test@user.nz' }
  ),
  getUsers: () => Promise.resolve([
    { id: 2, name: 'test user 2', email: 'test2@user.nz' },
    { id: 4, name: 'test user 4', email: 'test4@user.nz' }
  ])
}))

const server = require('../server')

test('GET /', (done) => {
  return request(server)
    .get('/')
    .then((res) => {
      expect(res.status).toBe(302)
      expect(res.header.location).toBe('/login')
      done()
    })
    .catch(err => expect(err).toBeNull())
})

test('GET /login ', (done) => {
  return request(server)
    .get('/login')
    .then((res) => {
      expect(res.status).toBe(200)
      done()
    })
    .catch(err => expect(err).toBeNull())
})

test('get student id form route params', (done) => {
  return request(server)
    .get('/students/1')
    // .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      const studentId = $('h1').text()

      expect(studentId).toBe('1')
      done()
    })
    .catch(err => expect(err).toBeNull())
})
