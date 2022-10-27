import express from "express";
import * as Controller from "../controllers/test.js";

// init router
const router = express.Router();

// mount routes
router.get("/", Controller.main);

export { router as default, router };
