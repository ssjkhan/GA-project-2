import express from "express";
import * as Controller from "../controllers/team.js";

// init router
const router = express.Router();

// mount routes
router.get("/", Controller.main);
router.get("/delete", Controller.deletePlayer);
router.post("/add", Controller.addPlayer);
router.delete("/", Controller.deletePlayer);

export { router as default };
