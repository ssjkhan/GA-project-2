var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", sayHello);

function sayHello(req, res, next) {
	res.send("hello this is index");
}

module.exports = router;
