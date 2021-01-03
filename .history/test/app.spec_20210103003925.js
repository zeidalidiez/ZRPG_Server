const app = require('../src/app')

describe('App', () => {
  it('Books endpoint responds with data', () => {
    return supertest(app)
      .get('/books/')
      .expect(200)
  })
})