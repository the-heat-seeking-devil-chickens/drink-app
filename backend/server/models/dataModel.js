const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spiritSchema = new Schema({
  name: String,
  liquor: Array,
  ingredients: Array,
  garnish: String,
  directions: Array,
});

const Spirit = mongoose.model('spirit', spiritSchema);
module.exports = Spirit;
