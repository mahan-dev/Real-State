import { model, Model, models, Schema } from "mongoose";
import { ProfileTypes } from "@/models/interface/ProfileTypes";

const ProfileSchema = new Schema<ProfileTypes>(
  {
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
    price: {
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
    category: {
      required: true,
      type: String,
      enum: ["villa", "apartment", "store", "office"],
    },
    rules: {
      type: [String],
      default: [],
    },
    amenities: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "RealStateDb",
    },
    published: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  }
);

const Profile: Model<ProfileTypes> =
  models.Profile || model<ProfileTypes>("Profile", ProfileSchema);
export default Profile;
