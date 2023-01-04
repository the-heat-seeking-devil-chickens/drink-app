// const index = require('../index');

// const request = require('supertest');
// const express = require('express');
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use('/', index);

// test('index route works', (done) => {
//   request(app)
//     .get('/')
//     .expect('Content-Type', /json/)
//     .expect({ name: 'frodo' })
//     .expect(200, done);
// });

// test('testing route works', (done) => {
//   request(app)
//     .post('/test')
//     .type('form')
//     .send({ item: 'hey' })
//     .then(() => {
//       request(app)
//         .get('/test')
//         .expect({ array: ['hey'] }, done);
//     });
// });

const request = require('supertest');
const app = require('../server/server.js');
const PORT = '8081';

const server = app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

const url = `http://localhost:${PORT}`;

describe('Route integration', () => {
  afterAll(() => {
    // server.close((err) => {
    //   process.exit(err ? 1 : 0);
    // });
  });

  describe('(GET) /', () => {
    it('responds with 200 status and application/json', () => {
      return request(url)
        .get('/')
        .expect('Content-Type', /application\/json/)
        .expect(200);
    });
  });

  xdescribe('(POST) / with an empty body', () => {
    it('responds with 500 status', () => {
      return request(url).post('/').send({}).expect(500);
    });
  });
});
