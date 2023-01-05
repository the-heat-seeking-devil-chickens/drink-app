const asyncHandler = require('express-async-handler');
const Spirit = require('../models/dataModel');

const baseError = {
  message: 'An error occurred in in the controller function',
  status: 400,
};

const spiritController = {};

spiritController.createSpirit = asyncHandler(async (req, res) => {
  const { name, ingredients, liquor, directions, garnish } = req.body;
  console.log('these are the req body things:')
  console.log('name:', name);
  console.log('ingredients:', ingredients);
  console.log('liquor:', liquor);
  console.log('directions:', directions);
  console.log('garnish:', garnish);
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

spiritController.deleteSpirit = asyncHandler(async (req,res,next) => {
  console.log('req.body', req.body)
  const { name } = req.body;
  console.log('about to delete:', name)
  await Spirit.findOneAndDelete({ name })
  return next();
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
