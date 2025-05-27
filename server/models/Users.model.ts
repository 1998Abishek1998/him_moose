import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdBy: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);

export type Users = mongoose.InferSchemaType<typeof userSchema>;
export const UsersModel = mongoose.model("users", userSchema);
