import mongoose, { model, models } from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});

const User = models.realDb || model("realDb", userSchema);
export default User;
