const request = require('supertest');
const app = require('../server/app.js');
const Spirit = require('../server/models/dataModel.js');

describe('Route integration', () => {
  beforeEach(async () => {});
  afterEach(async () => {
    Spirit.collection.drop();
  });

  describe('GET to "/"', () => {
    it('responds with 200 status and application/json', async () => {
      return await request(app)
        .get('/')
        .expect('Content-Type', /application\/json/)
        .expect(200);
    });
  });

  describe('POST to "/" with an empty body', () => {
    it('responds with 500 status', () => {
      return request(app).post('/').send({}).expect(500);
    });
  });
});
