var UserController = require("../app/http/controllers/api/UserController");
var express = require("express");
var router = express.Router();

router.get("/getAll", UserController.getAll);
router.get("/getOne", UserController.getOne);

module.exports = router;
