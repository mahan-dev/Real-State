import { Document } from "mongoose";

export interface ProfileTypes extends Document {
  _id: string;
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
  userId: object;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  metaData: {
    title: string;
    description: string;
  };
}
