import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// connect to mongodb and check if connection is success
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connection successful!");
  })
  .catch((err) => {
    console.log(err);
  });
  
// create application
const app = express();

app.listen(5000, () => {
  console.log("Server listening on port 5000!");
});
