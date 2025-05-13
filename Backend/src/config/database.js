const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MDBUSER}:${process.env.MDBPASSWORD}@cluster0.1xiz7dp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, { 
    //   useNewUrlParser: true, 
    //   useUnifiedTopology: true 
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error("MongoDB Failed", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;