import express from "express";
import * as Controller from "../controllers/team.js";

// init router
const router = express.Router();

// mount routes
router.get("/", Controller.main);
router.get("/add", Controller.newPlayer);
router.post("/add", Controller.newPlayer);

export { router as default };
