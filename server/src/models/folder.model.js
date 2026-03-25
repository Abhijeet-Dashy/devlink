import mongoose from "mongoose";

const folderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

folderSchema.index({ userId: 1, name: 1 }, { unique: true });

export const Folder = mongoose.model("Folder", folderSchema);
