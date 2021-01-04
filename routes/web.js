var HomeController = require("../app/http/controllers/web/HomeController");
var express = require("express");
var router = express.Router();

router.get("/", HomeController.home);
router.get("/apps", HomeController.apps);

module.exports = router;
