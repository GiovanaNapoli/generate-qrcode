import express from "express";
import env from "../env";
import route from "./route";

const app = express();
app.use(express.json());

app.use(route);

app.listen(env.LOCAL_PORT, () => {
  console.log(`Server is running on port ${env.LOCAL_PORT}`);
});
