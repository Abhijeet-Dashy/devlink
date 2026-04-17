import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    folderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Folder",
      required: true,
    },

    content: {
      type: String, // text OR URL OR image URL
      required: true,
    },

    type: {
      type: String,
      enum: ["text", "link", "image", "code"],
      required: true,
    },

    sourceUrl: {
      type: String,
      default: "",
    },

    note: {
      type: String,
      default: "",
    },

    tags: [
      {
        type: String,
      },
    ],

    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

itemSchema.index({ userId: 1, folderId: 1 });
itemSchema.index({ type: 1 });

export const Item = mongoose.model("Item", itemSchema);
