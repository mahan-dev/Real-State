import { Schema, Document, Model, model, models } from "mongoose";

interface UserInterface extends Document {
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  role: string;
}

export const userSchema = new Schema<UserInterface>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  role: {
    type: String,
    default: "USER"
  }
});

const User: Model<UserInterface> =
  models.RealStateDb || model<UserInterface>("RealStateDb", userSchema);
export default User;
