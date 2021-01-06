var appRoot = require("app-root-path");

// console.log("from routeserviceprovider ===", appRoot);

let _middlewares = require("./../http/Kernel");
let RouteServiceProvider = {
  HOME: "/home",
  boot: function (app) {
    app.use(
      "/admin",
      _middlewares.middlewareGroups.admin,
      require(app.get("config").get("paths.routes") + "/admin")
    );
    app.use(
      "/api",
      _middlewares.middlewareGroups.api,
      require("../../routes/api")
    );
    app.use(
      "/",
      _middlewares.middlewareGroups.web,
      require("../../routes/web")
    );
  },
};

module.exports = RouteServiceProvider;
