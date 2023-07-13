// connectionDB.js

const mongoose = require("mongoose");
const Seat = require("../models/seats.model");

const connectionDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGODB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB connected ", conn.connection.host);

  } catch (error) {
    console.log("MongoDB connection error ", error.message);
    process.exit();
  }
};

module.exports = connectionDB;
