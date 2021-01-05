let user = function (req, res, next) {
  console.log("user id = 1");
  next();
};

module.exports = user;
