// import lib
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import createError from "http-errors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// initialize global variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));

// Mount parsing middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// import middleware for mount
import indexRouter from "./routes/index.js";

// Mount Main Routes
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

export default app;
