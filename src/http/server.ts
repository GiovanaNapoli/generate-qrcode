import express from "express";
import env from "../env";
import route from "./route";
import cors from "cors";

const port = env.PORT || 3333;

const app = express();
app.use(express.json());

const corsOptions = {
  AccessControlAllowOrigin: "*",
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
