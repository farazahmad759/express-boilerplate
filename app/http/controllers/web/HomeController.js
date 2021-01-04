const home = (req, res) => {
  res.send("home");
};
const apps = (req, res) => {
  res.send("apps");
};

let _exports = {
  home,
  apps,
};
module.exports = _exports;
