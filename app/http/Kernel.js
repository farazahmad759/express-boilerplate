let _exports = {
  /**
   * The application's global HTTP middleware stack.
   *
   * These middleware are run during every request to your application.
   *
   * @var array
   */
  middleware: [],

  /**
   * The application's route middleware groups.
   *
   * @var array
   */
  middlewareGroups: {
    admin: [
      //
      require("./middlewares/authenticate"),
    ],
    web: [
      //
      require("./middlewares/authenticate"),
    ],
    api: [
      //
      require("./middlewares/authenticate"),
    ],
  },

  /**
   * The application's route middleware.
   *
   * These middleware may be assigned to groups or used individually.
   *
   * @var array
   */
  routeMiddleware: {
    //
    auth: require("./middlewares/authenticate"),
  },
};

module.exports = _exports;
