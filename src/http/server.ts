import express from "express";
import env from "../env";
import route from "./route";

const app = express();
app.use(express.json());

app.use(route);

app.listen(3333, () => {
  console.log(`Server is running on port ${3333}`);
});
