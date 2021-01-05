let _middlewares = require("./../http/Kernel");
let RouteServiceProvider = {
  HOME: "/home",
  boot: function (app) {
    app.use(
      "/admin",
      _middlewares.middlewareGroups.admin,
      require("../../routes/admin")
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
