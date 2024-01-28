import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res,next) => {
  // destructuring the request body
  const { username, email, password } = req.body;

  //   encrypt password
  const hashedPassword = bcryptjs.hashSync(password, 10);

  //   create new user from our user model
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    // we use await here to tell javascript to wait in the following code until the result happens because it could take time based on internet speed
    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    next(error);
  }
};
