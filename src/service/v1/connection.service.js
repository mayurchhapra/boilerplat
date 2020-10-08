const conn = (data, callback) => {
  try {
    return callback(null, data);
  } catch (e) {
    return callback(e, null);
  }
};

module.exports = {
  conn,
};
