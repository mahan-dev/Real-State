import { Document, Schema } from "mongoose";

interface ProfileTypes extends Document {
  title: string;
  description: string;
  location: string;
  phone: string;
  price: string;
  realState: string;
  constructionDate: Date;
  category: string;
  rules: string[];
  amenities: string[];
}

const ProfileSchema = new Schema<ProfileTypes>({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  realState: {
    required: true,
    type: String,
  },
  constructionDate: {
    required: true,
    type: Date,
  },
});
