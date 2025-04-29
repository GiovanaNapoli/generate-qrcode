import express from "express";
import env from "../env";
import route from "./route";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(route);
app.use(cors());

app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});
