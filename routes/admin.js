var DashboardController = require("../app/http/controllers/admin/DashboardController");
var express = require("express");
var router = express.Router();

router.get("/", DashboardController.dashboard);
router.get("/dashboard", DashboardController.dashboard);

module.exports = router;
