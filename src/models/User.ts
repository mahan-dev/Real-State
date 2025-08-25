import { Schema, Document, Model, model, models } from "mongoose";

interface UserInterface extends Document {
  email: string;
  password: string;
  createdAt: object;
  updatedAt: object;
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
    type: String,
    default: () => Date.now(),
  },
});

const User: Model<UserInterface> =
  models.RealStateDb || model<UserInterface>("RealStateDb", userSchema);
export default User;
