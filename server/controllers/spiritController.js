const asyncHandler = require('express-async-handler');
const Spirit = require('../models/dataModel');

const baseError = {
  message: 'An error occurred in in the controller function',
  status: 400,
};

const spiritController = {};

spiritController.createSpirit = asyncHandler(async (req, res) => {
  const { name, ingredients, liquor, directions, garnish } = req.body;

  const spirit = await Spirit.create({
    name,
    ingredients,
    garnish,
    directions,
    liquor,
  });
  if (spirit) {
    res.status(201).json({
      _id: spirit._id,
      name: spirit.name,
      ingredients: spirit.ingredients,
      garnish: spirit.garnish,
      directions: spirit.directions,
      liquor: spirit.liquor,
    });
  } else {
    res.status(400);
    throw new Error('Data is not valid');
  }
});

spiritController.getSpirits = asyncHandler(async (req, res, next) => {
  if (req.body.liquor === '') {
    return baseError;
  }

  //Mongo and/or Express did not like me using const here, why?
  res.locals.spirits = await Spirit.find();
  return next();
});

module.exports = spiritController;
