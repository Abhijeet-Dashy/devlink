import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

import folderRoutes from "./routes/folder.routes.js";
import authRoutes from "./routes/auth.routes.js";
import itemRoutes from "./routes/item.routes.js";

app.use("/api/items", itemRoutes);
app.use("/api/folders", folderRoutes);
app.use('/api/auth', authRoutes);

export {app}