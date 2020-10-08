import Whiteboard from '../../models/whiteboard';

const create = async (data, callback) => {
  try {
    const created = await Whiteboard.create(data);
    callback(null, created);
  } catch (e) {
    console.log(e);
    callback(e, null);
  }
};

module.exports = {
  create,
};
