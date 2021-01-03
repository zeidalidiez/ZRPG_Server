const app = require('../src/app')

describe('insert and read users', function(){
  it('post user information', () => {
    return supertest(app)
      .post('/books/')
      .expect(201)
    });
});