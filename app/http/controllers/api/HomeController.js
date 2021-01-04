const home = (req, res) => {
  res.send("home");
};
const dashboard = (req, res) => {
  res.send("dashboard");
};

let exp = {
  home,
  dashboard,
};
module.exports = exp;
