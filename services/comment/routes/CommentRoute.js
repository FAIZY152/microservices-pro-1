import express from "express";
import { createComment } from "../controller/Comment.controller.js";

const commentRouter = express.Router();

commentRouter.post("/create-comment/:id", createComment);

export default commentRouter;
