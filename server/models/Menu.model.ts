import * as mongoose from "mongoose";

export enum MenuType {
  MAIN = "main",
  APPETIZER = "appetizer",
  DESSERT = "dessert",
  DRINK = "drink",
  SIDE = "side",
}

const menuSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageOne: { type: String },
    imageTwo: { type: String },
    price: { type: Number, required: true },
    isSpecial: { type: Boolean, default: false },
    forCatering: { type: Boolean, default: false },
    isDrinks: { type: Boolean, default: false },
    forPub: { type: Boolean, default: false },
    forGrill: { type: Boolean, default: false },
    menuType: {
      type: String,
      enum: Object.values(MenuType),
      default: MenuType.MAIN,
    },
    discountAmount: { type: Number, default: 0 },
    discountDescription: { type: String },
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

export type Menu = mongoose.InferSchemaType<typeof menuSchema>;
export const MenuModel = mongoose.model("menu", menuSchema);
