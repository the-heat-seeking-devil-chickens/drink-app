// Command to run this test suite specifically:
// $ NODE_ENV=test jest __tests__/michael/supertest.js --runInBand --forceExit --verbose
const request = require('supertest');
const app = require('../../server/app.js');
const Spirit = require('../../server/models/dataModel.js');

const validDrink = {
  name: 'Whiskey Sour',
  liquor: ['whiskey'],
  ingredients: [
    ['2 Ounces of ', 'whiskey'],
    ['3/4 Ounces of ', 'lemon juice, freshly squeezed'],
    ['1/2 Ounce of  ', 'simple syrup'],
    ['1/2 Ounce of ', 'egg whites (Optional)'],
  ],
  garnish: 'Garnish: Angostura Bitters',
  directions: [
    'Step 1: Add bourbon, lemon juice, simple syrup and egg white, if using, to a shaker and dry-shake for 30 seconds without ice.',
    'Step 2: Add ice and shake again until well-chilled.',
    'Step 3: Strain into a rocks glass or a coupe.',
    'Step 4: Garnish with 3 or 4 drops of Angostura bitters.',
  ],
};

describe('Route integration', () => {
  beforeEach(async () => {});
  afterEach(async () => {
    Spirit.collection.drop();
  });

  describe('DELETE to "/api/spirits/:id"', () => {
    it('deletes an existing document', async () => {
      // create a drink in the database
      await request(app).post('/').send(validDrink);
      // check that drink exists in the database
      const arr = await Spirit.find();
      expect(arr.length).toEqual(1);
      // delete the drink from the database
      const obj = await request(app).delete(
        `/api/spirits/${arr[0]._id.toString()}`
      );
      // check that drink deleted from the database
      const arr2 = await Spirit.find();
      return expect(arr2.length).toEqual(0);
    });
  });

  describe('DELETE to "/api/spirits/:id"', () => {
    it('returns gracefully if the document does not exist', async () => {
      // check that deleting non-existing the drink from the database returns 500 error
      return await request(app)
        .delete(`/api/spirits/iddoesnotexist}`)
        .expect(500);
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
