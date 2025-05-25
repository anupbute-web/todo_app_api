const mongoose = require('mongoose');
let MONGODB_URI="mongodb+srv://anupbute:anupbute1@secrets.2pflmb5.mongodb.net/?retryWrites=true&w=majority&appName=secrets";
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
 