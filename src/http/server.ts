import express from "express";
import env from "../env";
import route from "./route";
import cors from "cors";

const port = env.PORT || 3333;

const app = express();
app.use(express.json());

app.use(route);
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
