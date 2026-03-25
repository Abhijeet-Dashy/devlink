import { Router } from "express";
import verifyJWT from "../middlewares/auth.middleware.js";
import {
  createFolder,
  getFolders,
  deleteFolder,
} from "../controllers/folder.controller.js";

const router = Router();

router.use(verifyJWT);

router.post("/", createFolder);
router.get("/", getFolders);
router.delete("/:folderId", deleteFolder);

export default router;