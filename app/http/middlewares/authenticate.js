let authenticate = function (req, res, next) {
  console.log("authenticated");
  next();
};

module.exports = authenticate;
