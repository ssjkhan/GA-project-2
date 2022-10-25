const express = require("express");
const indexCtrl = require("../controller/index");

// Init router
const router = express.Router();
/* GET home page. */
router.get("/", indexCtrl.main);

module.exports = router;
