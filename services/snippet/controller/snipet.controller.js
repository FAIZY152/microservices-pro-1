import { randomBytes } from "crypto";
import { snipetModel } from "../models/Db.js";

export const createSnipet = (req, res) => {
  try {
    const id = randomBytes(4).toString("hex");
    const { title, code } = req.body;

    snipetModel[id] = { id, title, code };
    return res
      .status(201)
      .json({ message: "Snippet created", snippet: snipetModel[id] });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getSnipet = (req, res) => {
  try {
    return res.status(201).json(snippet);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
