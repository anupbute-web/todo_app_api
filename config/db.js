const mongoose = require('mongoose');
let MONGODB_URI="mongodb+srv://anupbute015370:IeCKIRH4rTI0oJm1@new-todo.mpse5wy.mongodb.net/";
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
