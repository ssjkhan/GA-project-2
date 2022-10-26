const express = require("express");

// Init router
const router = express.Router();
/* GET home page. */
router.get("/", sayHello);

function sayHello(req, res, next) {
	res.send("hello this is index");
}

module.exports = router;
