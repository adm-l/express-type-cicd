import express from "express";            
import type { Request, Response } from "express"; 

import cors from "cors";

const app = express();
const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Bharat");
});

app.get("/health", (req: Request, res: Response) => {
  res.send("up and running!");
});
app.get("/users", (req: Request, res: Response) => {
  let arr = [{
    name:"bharat",
    age:12
  },{
    name:"bharat",
    age:12
  }]
  res.status(200).json(arr);
});
app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
