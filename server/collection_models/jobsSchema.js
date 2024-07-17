import mongoose from "mongoose";

const jobsSchema = new mongoose.Schema(
  {
    jobPostName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    jobHeader: { type: String, required: true },
    jobDefinition: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Jobs = mongoose.model("jobs", jobsSchema);

export default Jobs;
