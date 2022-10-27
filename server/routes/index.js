import express from "express";
import * as Controller from "../controllers/index.js";
import testRouter from "../routes/test.js";
import teamRouter from "../routes/team.js";

// Init router
const router = express.Router();

// mount routes
router.use("/test", Controller.test);
router.use("/team", Controller.team);

router.get("/", Controller.main);

export { router as default };
