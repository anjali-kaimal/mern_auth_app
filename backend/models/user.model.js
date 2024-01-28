import mongoose, { mongo } from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// what we have given in the double quotes will be the name of the collection, but mongodb will add an s in the end for us i.e. users
const User = mongoose.model("User", userSchema);

// we export as default so we can use it anywhere else in the project
export default User;
