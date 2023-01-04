const request = require('supertest');
const app = require('../server/app.js');
const Spirit = require('../server/models/dataModel.js');

describe('Route integration', () => {
  beforeEach(async () => {});
  afterAll(async () => {
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

  describe('POST to "/"', () => {
    describe('with no body', () => {
      it('responds with 500 status', () => {
        return request(app)
          .post('/')
          .send({})
          .expect(500);
      });
    });

    describe('with incomplete body', () => {

      beforeEach(() => {
        badInput = Object.assign({}, sampleSpirit)
      });

      let badInput;
      const sampleSpirit = {
        name: 'Boilermaker',
        liquor: ['whiskey'],
        ingredients: [
          ['1 1/2 Ounces', 'whiskey'],
          ['8 Ounces', 'beer'],
        ],
        garnish: 'Garnish: none',
        directions: [
          'Step 1: Pour the whiskey into a shot glass.',
          'Step 2: Fill a pint glass halfway with beer.',
          'Step 3: Drop the shot glass into the beer.',
        ],
      };

      it('responds with 500 status for missing name', () => {
        delete badInput.name;
        return request(app)
          .post('/')
          .send(badInput)
          .expect(500);
      });

      it('responds with 500 status for missing liquor', () => {
        delete badInput.liquor;
        console.log(badInput.liquor)
        return request(app)
          .post('/')
          .send(badInput)
          .expect(500);
      });

      it('responds with 500 status for missing ingredients', () => {
        delete badInput.ingredients;
        return request(app)
          .post('/')
          .send(badInput)
          .expect(500);
      });

      it('responds with 500 status for missing garnish', () => {
        delete badInput.garnish;
        return request(app)
          .post('/')
          .send(badInput)
          .expect(500);
      });

      it('responds with 500 status for missing directions', () => {
        delete badInput.garnish;
        return request(app)
          .post('/')
          .send(badInput)
          .expect(500);
      });
    });
  });
});
