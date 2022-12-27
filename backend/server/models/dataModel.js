const mongoose = require('mongoose');
const cocktailSchema = mongoose.Schema({
  name: String,
  liquor: Array,
  ingredients: Array,
  garnish: Array,
  description: String,
});

const Cocktail = mongoose.model('cocktail', cocktailSchema);
module.exports = { Cocktail };
