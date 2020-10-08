import service from '../../service/v1/whiteboard.service';

const getById = (req, res) => {
  res.json({
    getById: req.params,
  });
};

const list = (req, res) => {
  res.json({
    list: true,
  });
};

const create = (req, res) => {
  const reqDate = Math.floor(new Date());

  service.create(req.body, (error, data) => {
    const resDate = Math.floor(new Date());
    if (error) {
      console.log(error);
      res.json(error);
    }
    data.latency = resDate - reqDate;
    res.json(data);
  });
};

const update = (req, res) => {
  res.json({
    save: req.params,
  });
};

const deleteById = (req, res) => {
  res.json({
    deleteById: req.params,
  });
};

const hideById = (req, res) => {
  req.json({
    hideById: req.params,
  });
};

module.exports = {
  getById,
  list,
  create,
  update,
  deleteById,
  hideById,
};
