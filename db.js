const mongoose = require("mongoose");

//  define the mongodb connection URL

const mongoURL = "mongodb://127.0.0.1:27017/hotels";

// set up mongodb  connection

mongoose.connect(mongoURL);

const db = mongoose.connection;

// define event listeners for database connection

db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// export the databse connection

module.exports = db;
