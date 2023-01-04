// Command to run this test suite specifically:
// $ NODE_ENV=test jest __tests__/michael/supertest.js --runInBand --forceExit --verbose
const request = require('supertest');
const app = require('../../server/app.js');
const Spirit = require('../../server/models/dataModel.js');

const validDrink = {
  name: 'Gimlet',
  liquor: ['gin'],
  ingredients: [
    ['lime cordial', '50ml'],
    ['gin', '50ml'],
  ],
  garnish: ['lime', 'edible flower'],
  directions:
    'STEP 1 Put a martini or coupe glass in the fridge to chill. STEP 2 Pour 50ml of the lime syrup (see recipe, below) or cordial into a jug or tall glass and add a few ice cubes and the gin. Stir until the outside of the container feels very cold. STEP 3 Strain the mixture into your chilled glass and garnish with a slice of lime and an edible flower.',
};

describe('Route integration', () => {
  beforeEach(async () => {});
  afterEach(async () => {
    Spirit.collection.drop();
  });

  describe('DELETE to "/api/spirits/:id"', () => {
    it('responds with 200 status and application/json', async () => {
      return request(app).post('/').send(validDrink).expect(201);
    });
  });

  // describe('DELETE to "/api/spirits/:id"', async () => {
  //   it('responds with 200 status and application/json', async () => {
  //     return await request(app).post('/').send(validDrink).expect(201);
  //     console.log(res);
  //     //return res;
  //   });
  // });
});
