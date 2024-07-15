import mongoose, { Schema } from "mongoose";

const Jobs = new mongoose.Schema(
  {
    id: { type: Schema.Types.ObjectId, required: true },
    jobDefinition: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
