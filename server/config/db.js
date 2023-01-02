const mongoose = require('mongoose');

//Connect to our MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'Goblin',
    });
    console.log(`Mongo DB Connected: ${conn.connection.host}`.cyan);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    //if we error, exit entire process
    process.exit(1);
  }
};

module.exports = connectDB;