const request = require('supertest');
const app = require('../server/app.js');
const Spirit = require('../server/models/dataModel.js');

describe('Route integration', () => {
  beforeEach(async () => {});
  afterAll(async () => {
    Spirit.collection.drop();
  });

  describe('GET to "/"', () => {
    it('responds with 200 status and application/json', () => {
      return request(app)
        .get('/')
        .expect('Content-Type', /application\/json/)
        .expect(200);
    });
  });

  describe('POST to "/"', () => {
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

    describe('with no body', () => {
      it('responds with 500 status', () => {
        return request(app)
          .post('/')
          .send({})
          .expect(500);
      });
    });

    describe('with incomplete body', () => {
      
      let badInput;
      
      beforeEach(() => {
        badInput = Object.assign({}, sampleSpirit)
      });

      Object.keys(sampleSpirit).forEach(key => {
         it(`responds with 500 status for missing ${key}`, () => {
          delete badInput[key];
          return request(app)
            .post('/')
            .send(badInput)
            .expect(500);
        });
      });
    });
    
    describe('with a spirit object', () => {
      it('responds with a 201 status and the spirit object', () => {
        return request(app)
          .post('/')
          .send(sampleSpirit)
          .expect(201)
          .expect('Content-Type', /application\/json/)
      })
    });
  });
});
