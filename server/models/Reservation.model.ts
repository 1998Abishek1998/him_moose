import * as mongoose from "mongoose";

export enum ReservationStatus {
  REQUEST = "client_request",
  VIEWED = "viewed_by_admin",
  ACC = "accepted",
  REJ = "rejected",
  PEN = "pending",
}

const reservationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    guestsCount: { type: Number, required: true },
    inquiry: { type: String },
    status: {
      type: String,
      enum: Object.values(ReservationStatus),
      default: ReservationStatus.REQUEST,
    },
    handledBy: {
      type: mongoose.Types.ObjectId,
    },
    lastUpdatedBy: {
      type: mongoose.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

export type Reservatation = mongoose.InferSchemaType<typeof reservationSchema>;
export const ReservatationModel = mongoose.model(
  "reservation",
  reservationSchema
);
