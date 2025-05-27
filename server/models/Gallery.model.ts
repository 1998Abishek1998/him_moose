import * as mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageOne: { type: String },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: { type: mongoose.Types.ObjectId, required: true },
    lastUpdatedBy: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);

export type Gallery = mongoose.InferSchemaType<typeof gallerySchema>;
export const GalleryModel = mongoose.model("gallery", gallerySchema);
