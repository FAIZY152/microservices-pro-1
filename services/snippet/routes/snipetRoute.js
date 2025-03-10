import express from "express";
import { createSnipet, getSnipet } from "../controller/snipet.controller.js";

const SnipetRoute = express.Router();

SnipetRoute.route("/create").post(createSnipet);
SnipetRoute.route("/get").get(getSnipet);

export default SnipetRoute;
