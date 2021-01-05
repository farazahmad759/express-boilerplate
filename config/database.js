let _exports = {
  /**
   * --------------------------------------------------------------------------
   * Default Database Connection Name
   * --------------------------------------------------------------------------
   *
   * Here you may specify which of the database connections below you wish
   * to use as your default connection for all database work. Of course
   * you may use many connections at once using the Database library.
   *
   */

  default: process.env.DB_CONNECTION ? process.env.DB_CONNECTION : "mysql",

  /**
   * --------------------------------------------------------------------------
   * Database Connections
   * --------------------------------------------------------------------------
   *
   * Here are each of the database connections setup for your application.
   * Of course, examples of configuring each database platform that is
   * supported by Laravel is shown below to make development simple.
   *
   *
   * All database work in Laravel is done through the PHP PDO facilities
   * so make sure you have the driver for your particular database of
   * choice installed on your machine before you begin development.
   *
   */

  connections: {
    sqlite: {
      driver: "sqlite",
      url: process.env.DATABASE_URL,
      database: process.env.DB_DATABASE
        ? process.env.DB_DATABASE
        : "database.sqlite",
      prefix: "",
      foreign_key_constraints: process.env.DB_FOREIGN_KEYS
        ? process.env.DB_FOREIGN_KEYS
        : true,
    },

    mysql: {
      driver: "mysql",
      url: process.env.DATABASE_URL,
      host: process.env.DB_HOST ? process.env.DB_HOST : "127.0.0.1",
      port: process.env.DB_PORT ? process.env.DB_PORT : "3306",
      database: process.env.DB_DATABASE ? process.env.DB_DATABASE : "forge",
      username: process.env.DB_USERNAME ? process.env.DB_USERNAME : "forge",
      password: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "",
      unix_socket: process.env.DB_SOCKET ? process.env.DB_SOCKET : "",
      charset: "utf8mb4",
      collation: "utf8mb4_unicode_ci",
      prefix: "dv_",
      prefix_indexes: true,
      strict: true,
      engine: null,
      options: [],
    },

    pgsql: {
      driver: "pgsql",
      url: process.env.DATABASE_URL,
      host: process.env.DB_HOST ? process.env.DB_HOST : "127.0.0.1",
      port: process.env.DB_PORT ? process.env.DB_PORT : "5432",
      database: process.env.DB_DATABASE ? process.env.DB_DATABASE : "forge",
      username: process.env.DB_USERNAME ? process.env.DB_USERNAME : "forge",
      password: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "",
      charset: "utf8",
      prefix: "",
      prefix_indexes: true,
      schema: "public",
      sslmode: "prefer",
    },

    sqlsrv: {
      driver: "sqlsrv",
      url: process.env.DATABASE_URL,
      host: process.env.DB_HOST ? process.env.DB_HOST : "localhost",
      port: process.env.DB_PORT ? process.env.DB_PORT : "1433",
      database: process.env.DB_DATABASE ? process.env.DB_DATABASE : "forge",
      username: process.env.DB_USERNAME ? process.env.DB_USERNAME : "forge",
      password: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : "",
      charset: "utf8",
      prefix: "",
      prefix_indexes: true,
    },
  },

  /**
   * --------------------------------------------------------------------------
   * Migration Repository Table
   * --------------------------------------------------------------------------
   *
   * This table keeps track of all the migrations that have already run for
   * your application. Using this information, we can determine which of
   * the migrations on disk haven't actually been run in the database.
   *
   */

  migrations: "migrations",

  /**
   * --------------------------------------------------------------------------
   * Redis Databases
   * --------------------------------------------------------------------------
   *
   * Redis is an open source, fast, and advanced key-value store that also
   * provides a richer body of commands than a typical key-value system
   * such as APC or Memcached. Laravel makes it easy to dig right in.
   *
   */

  redis: {
    client: process.env.REDIS_CLIENT ? process.env.REDIS_CLIENT : "phpredis",

    options: {
      cluster: process.env.REDIS_CLUSTER ? process.env.REDIS_CLUSTER : "redis",
      prefix: process.env.REDIS_PREFIX
        ? process.env.APP_NAME
          ? process.env.APP_NAME
          : "laravel"
        : "_database_",
    },

    default: {
      url: process.env.REDIS_URL,
      host: process.env.REDIS_HOST ? process.env.REDIS_HOST : "127.0.0.1",
      password: process.env.REDIS_PASSWORD ? process.env.REDIS_PASSWORD : null,
      port: process.env.REDIS_PORT ? process.env.REDIS_PORT : "6379",
      database: process.env.REDIS_DB ? process.env.REDIS_DB : "0",
    },

    cache: {
      url: process.env.REDIS_URL,
      host: process.env.REDIS_HOST ? process.env.REDIS_HOST : "127.0.0.1",
      password: process.env.REDIS_PASSWORD ? process.env.REDIS_PASSWORD : null,
      port: process.env.REDIS_PORT ? process.env.REDIS_PORT : "6379",
      database: process.env.REDIS_CACHE_DB ? process.env.REDIS_CACHE_DB : "1",
    },
  },
};

module.exports = _exports;
