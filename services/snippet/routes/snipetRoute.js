import express from "express";

const router = express.Router();

router.route("/create").post(createSnipet);

export default router;
