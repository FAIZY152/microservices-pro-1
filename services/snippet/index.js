import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import SnipetRoute from "./routes/snipetRoute.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const startServer = () => {
  app.get("/", (req, res) => {
    res.send("Hello World from snippet!");
  });

  app.use("/api/v1/snippet", SnipetRoute);

  app.listen(port, (err) => {
    if (err) {
      return console.error("Failed to start server:", err);
    }
    console.log(`Example app listening on port ${port}`);
  });
};

startServer();

export default app;
