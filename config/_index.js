var convict = require("convict");

convict.addFormat(require("convict-format-with-validator").ipaddress);

// Define a schema
var config = convict({
  app: require("./app"),
  auth: require("./auth"),
  cors: require("./cors"),
  database: require("./database"),
  paths: require("./paths"),
  view: require("./view"),
});
// Perform validation
config.validate({ allowed: "strict" });

module.exports = config;
