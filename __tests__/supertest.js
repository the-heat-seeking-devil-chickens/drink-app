const request = require('supertest');
const app = require('../server/server.js');
const PORT = '8081';

const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

const url = `http://localhost:${PORT}`;



describe('Route integration', () => {
  
  afterAll(() => {
    console.log('Hi')
    server.close((err) => {
      process.exit(err ? 1 : 0)
    });
  })

  describe('(GET) /', () => {
    it('responds with 200 status and application/json', () => {
        return request(url).get('/')
        .expect('Content-Type', /application\/json/)
        .expect(200);
    })
  });

  describe('(POST) / with an empty body', () => {
    it('responds with 500 status', () => {
      return request(url).post('/')
        .send({})
        .expect(500)
    })
  })
});