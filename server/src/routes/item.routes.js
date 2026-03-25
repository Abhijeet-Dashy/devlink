import { Router } from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import {
  createItem,
  getItems,
  deleteItem,
  updateItem,
} from "../controllers/item.controller.js";

const router = Router();

router.use(verifyJWT);

router.post("/", createItem);
router.get("/", getItems);
router.delete("/:itemId", deleteItem);
router.patch("/:itemId", updateItem);

export default router;