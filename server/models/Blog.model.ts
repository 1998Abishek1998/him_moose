import * as mongoose from "mongoose";

export enum BlogType {
  HOME = "home",
  ABOUT = "about",
  CATERING = "catering",
  CONTACT = "contact",
  RESERVE = "reservation",
  VLT = "vlt",
}

export enum BlogParagraph {
  P0 = "p0",
  P1 = "p1",
  P2 = "p2",
  P3 = "p3",
  P4 = "p4",
  P5 = "p5",
  P6 = "p6",
  P7 = "p7",
  P8 = "p8",
  P9 = "p9",
  P10 = "p10",
}

const blogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    blogType: {
      type: String,
      enum: Object.values(BlogType),
      required: true,
    },
    blogParagraph: {
      type: String,
      enum: Object.values(BlogParagraph),
      required: true,
    },
    createdBy: { type: mongoose.Types.ObjectId, required: true },
    lastUpdatedBy: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);

export type Gallery = mongoose.InferSchemaType<typeof blogSchema>;
export const GalleryModel = mongoose.model("gallery", blogSchema);
