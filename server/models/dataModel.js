const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spiritSchema = new Schema({
  name: {
    type: String,
    unique: true,
    validate: input => input.length > 0, 
    required: true
  },
  liquor: {
    type: [String],
    validate: input => Array.isArray(input) && input.length > 0,
    required: true
  },
  ingredients: {
    type: [],
    validate: input => Array.isArray(input) && input.length > 0,
    required: true
  },
  garnish: {
    type: String,
    validate: input => typeof input === 'string' && input.length > 0, 
    required: true
  },
  directions: {
    type: [String],
    validate: input => Array.isArray(input) && input.length > 0,
    required: true
  },
});

const Spirit = mongoose.model('spirit', spiritSchema);
module.exports = Spirit;
