const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are six blogs in MongoDB', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body.length).toBe(6)
})

test('the first blog has name Anna', async () => {
  const response = await api.get('/api/blogs')

  expect(response.body[0].name).toBe('Anna')
})

afterAll(() => {
  mongoose.connection.close()
})

