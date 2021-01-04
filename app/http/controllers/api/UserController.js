const getAll = (req, res) => {
  res.send("api -> getAll");
};
const getOne = (req, res) => {
  res.send("api -> getOne");
};

let _exports = {
  getAll,
  getOne,
};
module.exports = _exports;
