var appRoot = require("app-root-path");
let _exports = {
  root: appRoot.path,
  public: appRoot + "/public",
  resources: appRoot + "/resources",
  storage: appRoot + "/storage",
  routes: appRoot + "/routes",
  models: appRoot + "/models",
  providers: appRoot + "/providers",
};

module.exports = _exports;
