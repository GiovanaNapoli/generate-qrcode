import express from "express";
import env from "../env";
import route from "./route";

const port = env.PORT || 3333;

const app = express();
app.use(express.json());

app.use(route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
