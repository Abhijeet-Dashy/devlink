import { Item } from "../models/item.model.js";
import { Folder } from "../models/folder.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

export const createItem = asyncHandler(async (req, res) => {
  const { content, type, folderId, note, tags, sourceUrl } = req.body;

  if (!content || !type || !folderId) {
    throw new ApiError(400, "Missing required fields");
  }

  // check folder belongs to user
  const folder = await Folder.findOne({
    _id: folderId,
    userId: req.user._id,
  });

  if (!folder) {
    throw new ApiError(404, "Folder not found");
  }

  const item = await Item.create({
    userId: req.user._id,
    folderId,
    content,
    type,
    note,
    tags,
    sourceUrl,
  });

  return res.status(201).json(new ApiResponse(201, item, "Item saved"));
});

export const getItems = asyncHandler(async (req, res) => {
  const { folderId } = req.query;

  const query = { userId: req.user._id };
  if (folderId) {
    query.folderId = folderId;
  }

  const items = await Item.find(query).sort({ createdAt: -1 });

  return res.status(200).json(new ApiResponse(200, items));
});

export const deleteItem = asyncHandler(async (req, res) => {
  const { itemId } = req.params;

  const item = await Item.findOneAndDelete({
    _id: itemId,
    userId: req.user._id,
  });

  if (!item) {
    throw new ApiError(404, "Item not found");
  }

  return res.status(200).json(new ApiResponse(200, {}, "Item deleted"));
});

export const updateItem = asyncHandler(async (req, res) => {
  const { itemId } = req.params;
  const { content, note, tags, folderId, sourceUrl } = req.body;

  let updateFields = { content, note, tags, sourceUrl };

  if (folderId) {
    const folder = await Folder.findOne({
      _id: folderId,
      userId: req.user._id,
    });

    if (!folder) {
      throw new ApiError(404, "New folder not found");
    }
    updateFields.folderId = folderId;
  }

  const item = await Item.findOneAndUpdate(
    {
      _id: itemId,
      userId: req.user._id,
    },
    { $set: updateFields },
    { new: true },
  );

  if (!item) {
    throw new ApiError(404, "Item not found");
  }

  return res.status(200).json(new ApiResponse(200, item, "Item updated"));
});
