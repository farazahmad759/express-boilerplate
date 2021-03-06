let _exports = {
  /**
   * --------------------------------------------------------------------------
   * Application Name
   * --------------------------------------------------------------------------
   * This value is the name of your application. This value is used when the
   * framework needs to place the application's name in a notification or
   * any other location as required by the application or its packages.
   *
   */
  name: process.env.APP_NAME ? process.env.APP_NAME : "Dricup App",

  /**
   * --------------------------------------------------------------------------
   * Application PORT
   * --------------------------------------------------------------------------
   * The PORT at which the app will run
   *
   */
  port: process.env.APP_PORT ? process.env.APP_PORT : "3000",
  /**
   * --------------------------------------------------------------------------
   * Application Environment
   * --------------------------------------------------------------------------
   * This value determines the "environment" your application is currently
   * running in. This may determine how you prefer to configure various
   * services the application utilizes. Set this in your ".env" file.
   *
   */
  env: process.env.APP_ENV ? process.env.APP_ENV : "production",
  /**
   * --------------------------------------------------------------------------
   * Application Debug Mode
   * --------------------------------------------------------------------------
   * When your application is in debug mode, detailed error messages with
   * stack traces will be shown on every error that occurs within your
   * application. If disabled, a simple generic error page is shown.
   *
   */
  debug: process.env.APP_DEBUG ? process.env.APP_DEBUG : false,
  /**
   * --------------------------------------------------------------------------
   * Application URL
   * --------------------------------------------------------------------------
   * This URL is used by the console to properly generate URLs when using
   * the Artisan command line tool. You should set this to the root of
   * your application so that it is used when running Artisan tasks.
   *
   */
  url: process.env.APP_URL ? process.env.APP_URL : "http://localhost",
  asset_url: process.env.ASSET_URL ? process.env.ASSET_URL : null,

  /**
   * --------------------------------------------------------------------------
   * Application Timezone
   * --------------------------------------------------------------------------
   * Here you may specify the default timezone for your application, which
   * will be used by the PHP date and date-time functions. We have gone
   * ahead and set this to a sensible default for you out of the box.
   *
   */
  timezone: "UTC",

  /**
   * --------------------------------------------------------------------------
   * Application Locale Configuration
   * --------------------------------------------------------------------------
   * The application locale determines the default locale that will be used
   * by the translation service provider. You are free to set this value
   * to any of the locales which will be supported by the application.
   *
   */
  locale: "en",

  /**
   * --------------------------------------------------------------------------
   * Application Fallback Locale
   * --------------------------------------------------------------------------
   * The fallback locale determines the locale to use when the current one
   * is not available. You may change the value to correspond to any of
   * the language folders that are provided through your application.
   *
   */
  fallback_locale: "en",

  /**
   * --------------------------------------------------------------------------
   * Encryption Key
   * --------------------------------------------------------------------------
   * This key is used by the Illuminate encrypter service and should be set
   * to a random, 32 character string, otherwise these encrypted strings
   * will not be safe. Please do this before deploying an application!
   *
   */
  key: process.env.APP_KEY ? process.env.APP_KEY : null,
  cipher: "AES-256-CBC",

  /**
   * --------------------------------------------------------------------------
   * Autoloaded Service Providers
   * --------------------------------------------------------------------------
   * The service providers listed here will be automatically loaded on the
   * request to your application. Feel free to add your own services to
   * this array to grant expanded functionality to your applications.
   *
   */
  providers: [
    /**
     * Dricup framework Service Providers
     */
    require("./../app/providers/ConfigServiceProvider"), // ConfigServiceProvider should be at index 0
    require("./../app/providers/FileSystemServiceProvider"), // ConfigServiceProvider should be at index 1
    require("./../app/providers/RouteServiceProvider"),
    /*
     * Package Service Providers...
     */
    /**
     * Package Service Providers
     */
  ],
};

module.exports = _exports;
