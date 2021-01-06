var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var app = express();

/**
 * --------------------------------------------------------------------------
 * Load config
 * --------------------------------------------------------------------------
 */
let config = require("../config/_index");
let appPaths = config.get("app.directory_paths");
/**
 * --------------------------------------------------------------------------
 * Setup View Engine
 * --------------------------------------------------------------------------
 */
app.set("views", config.get("view.paths"));
app.set("view engine", "hbs");

/**
 * --------------------------------------------------------------------------
 * Setup middlewares
 * --------------------------------------------------------------------------
 */

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(appPaths.public));
/**
 * --------------------------------------------------------------------------
 * Register Service Providers
 * --------------------------------------------------------------------------
 */

let _providers = config.get("app.providers");
_providers.forEach((_provider) => {
  _provider.boot(app);
});

app.use("/404", function (req, res) {
  res.sendFile(appPaths.public + "/404.html");
  // res.render("index");
});

/**
 * --------------------------------------------------------------------------
 * catch 404 and forward to error handler
 * --------------------------------------------------------------------------
 */
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log(req.app.get("env"));
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
  // res.render("error");
});

module.exports = app;
