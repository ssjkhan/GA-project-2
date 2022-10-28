import express from "express";
import * as Controller from "../controllers/team.js";

// init router
const router = express.Router();

// mount routes
router.get("/", Controller.main);
router.post("/add", Controller.addPlayer);

export { router as default };
