var ApiHomeController = require("../app/http/controllers/api/HomeController");
var express = require("express");
var router = express.Router();

router.get("/home", ApiHomeController.home);
router.get("/dashboard", ApiHomeController.dashboard);
router.get("/", ApiHomeController.home);

module.exports = router;
