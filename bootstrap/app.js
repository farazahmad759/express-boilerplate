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
let config = require("./../config/config");

/**
 * --------------------------------------------------------------------------
 * Setup View Engine
 * --------------------------------------------------------------------------
 */
app.set("views", path.join(__dirname, "resources/views"));
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
app.use(express.static(path.join(__dirname, "public")));

/**
 * --------------------------------------------------------------------------
 * Register routes
 * --------------------------------------------------------------------------
 */

app.use("/", function (req, res) {
  res.send(process.env.DB_HOST);
});
// app.use("/", require("../routes/web"));
app.use("/admin", require("../routes/admin"));
app.use("/api", require("../routes/api"));

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
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
