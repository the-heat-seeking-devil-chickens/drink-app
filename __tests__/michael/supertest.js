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

describe('Route integration 1', () => {
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

  describe('PUT to "/api/spirits/:id"', () => {

    let dbSpirit;
    const update = {...sampleSpirit, name: 'New Drink'};
    let updateSpirit;

    beforeAll(async () => {
      // put drink into the db
      await request(app).post('/').send(sampleSpirit);
      // find the new drink in the db and pull it's name
      dbSpirit = await Spirit.findOne({ name: sampleSpirit.name });
    });

    it('responds with 200 status for OK with Content Body and application/json', async () => {
      const response = await request(app)
        .put(`/api/spirits/${dbSpirit._id.toString()}`)
        .send(update)
        .expect(200)
        .expect('Content-Type', /application\/json/);

      updateSpirit = response.body;
    });

    it('returns an object with the values before the update', () => {
      expect(JSON.stringify(updateSpirit)).toEqual(JSON.stringify(dbSpirit));
    });

    it('returns the updated object on subsequent queries', async () => {
      const updated = await Spirit.findOne(update);
      expect(JSON.stringify(updated)).toEqual(JSON.stringify({...dbSpirit._doc, ...update}));
    });
  });
});

describe('Route integration', () => {
  beforeEach(async () => {});
  afterEach(async () => {
    // Spirit.collection.drop();
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
});
