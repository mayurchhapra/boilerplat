import service from '../../service/v1/connection.service';

const conn = (req, res) => {
  try {
    const reqDate = Math.floor(new Date());
    service.conn(req.body, (err, data) => {
      data.latency = Math.floor(new Date()) - reqDate;
      return res.json(data);
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  conn,
};
