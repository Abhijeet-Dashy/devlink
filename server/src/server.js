import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: true,           // reflect request origin — works for chrome-extension:// too
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());

import folderRoutes from "./routes/folder.routes.js";
import authRoutes from "./routes/auth.routes.js";
import itemRoutes from "./routes/item.routes.js";

app.use("/api/items", itemRoutes);
app.use("/api/folders", folderRoutes);
app.use('/api/auth', authRoutes);

export {app}