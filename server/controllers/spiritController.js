const asyncHandler = require('express-async-handler');
const Spirit = require('../models/dataModel');

const baseError = {
  message: 'An error occurred in in the controller function',
  status: 400,
};

const spiritController = {};

spiritController.createSpirit = asyncHandler((req, res) => {
  const { name, ingredients, liquor, directions, garnish } = req.body;

  Spirit.create(
    {
      name,
      ingredients,
      garnish,
      directions,
      liquor,
    },
    (err, response) => {
      if (err) res.status(500).json(err);
      else res.status(201).json(response);
    }
  );
});

spiritController.getSpirits = asyncHandler(async (req, res, next) => {
  if (req.body.liquor === '') {
    return baseError;
  }

  //Mongo and/or Express did not like me using const here, why?
  res.locals.spirits = await Spirit.find();
  return next();
});

spiritController.deleteSpirit = asyncHandler(async (req, res, next) => {
  await Spirit.findOneAndDelete({ _id: res.locals.id });
  return next();
});

module.exports = spiritController;
