// https://stackoverflow.com/questions/69482210/referenceerror-textencoder-is-not-defined-with-mongodb-nodes

global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

const mongoose = require('mongoose');

const URI = process.env.NODE_ENV === 'test' ? process.env.MONGO_URI_TEST : process.env.MONGO_URI;

//Connect to our MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongo DB Connected: ${conn.connection.host}`.cyan);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    //if we error, exit entire process
    process.exit(1);
  }
};

module.exports = connectDB;
