import express from "express";            
import type { Request, Response } from "express"; 

import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/health", (req: Request, res: Response) => {
  res.send("up and running!");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
