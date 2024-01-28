import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cors from 'cors';
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
app.use(express.json());
app.use(cors());

app.listen(5000, () => {
  console.log("Server listening on port 5000!");
});

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

// middleware
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||"Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode,
    });
})
