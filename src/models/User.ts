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
    minLength: 4,
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
  models.RealDb || model<UserInterface>("RealDb", userSchema);
export default User;
