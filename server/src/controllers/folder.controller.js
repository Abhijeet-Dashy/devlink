import { Folder } from "../models/folder.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const createFolder = asyncHandler(async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new ApiError(400, "Folder name required");
  }

  const folder = await Folder.create({
    name,
    userId: req.user._id,
  });

  return res.status(201).json(new ApiResponse(201, folder, "Folder created"));
});

export const getFolders = asyncHandler(async (req, res) => {
  const folders = await Folder.find({
    userId: req.user._id,
  }).sort({ createdAt: -1 });

  return res.status(200).json(new ApiResponse(200, folders));
});

export const deleteFolder = asyncHandler(async (req, res) => {
  const { folderId } = req.params;

  const folder = await Folder.findOneAndDelete({
    _id: folderId,
    userId: req.user._id,
  });

  if (!folder) {
    throw new ApiError(404, "Folder not found");
  }

  return res.status(200).json(new ApiResponse(200, {}, "Folder deleted"));
});
