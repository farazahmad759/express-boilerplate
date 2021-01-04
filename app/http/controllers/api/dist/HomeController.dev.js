"use strict";

var home = function home(req, res) {
  res.send("home");
};

var dashboard = function dashboard(req, res) {
  res.send("dashboard");
};

var exp = {
  home: home,
  dashboard: dashboard
};
module.exports = exp;