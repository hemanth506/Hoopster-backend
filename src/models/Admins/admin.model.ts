import { Schema, model } from "mongoose";
import { IAdmin } from "../../interfaces/admin.interface";

export const AdminSchema = new Schema<IAdmin>(
  {
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const AdminModel = model<IAdmin>("Admin", AdminSchema);
