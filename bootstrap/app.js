var appRoot = require("app-root-path");
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
let config = require(appRoot + "/config/_index");
app.set("config", config);

/**
 * --------------------------------------------------------------------------
 * Setup View Engine
 * --------------------------------------------------------------------------
 */
app.set("views", app.get("config").get("view.paths"));
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
app.use(express.static(app.get("config").get("paths.public")));
/**
 * --------------------------------------------------------------------------
 * Register Service Providers
 * --------------------------------------------------------------------------
 */

// console.log(appRoot);
let _providers = app.get("config").get("app.providers");
// for (let i = 0; i < _providers.length; i++) {
//   _providers[i].boot(app);
// }
_providers.forEach((_provider) => {
  _provider.boot(app);
});

app.use("/404", function (req, res) {
  // console.log("from route", appRoot);
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
