var appRoot = require("app-root-path");
var convict = require("convict");

let FileSystemServiceProvider = {
  boot: function (app, express) {
    /**
     * Expose paths here
     */
    app.use(express.static(app.get("config").get("paths.public")));
    app.use(
      "/http-error-pages",
      express.static(
        app.get("config").get("paths.node_modules") + "/http-error-pages"
      )
    );
  },
};

module.exports = FileSystemServiceProvider;
