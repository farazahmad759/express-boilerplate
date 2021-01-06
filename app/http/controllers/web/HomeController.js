const home = (req, res) => {
  res.render("index");
};
const apps = (req, res) => {
  res.send("apps");
};

let _exports = {
  home,
  apps,
};
module.exports = _exports;
