/**
 * Author: Mayur
 */

import Whiteboard from '../../models/whiteboard';

const getById = async (whiteboard_id, callback) => {
  try {
    const board = await Whiteboard.findById(whiteboard_id).lean();
    callback(null, board);
  } catch (e) {
    callback(e, null);
  }
};

const list = async (callback) => {
  try {
    const list = await Whiteboard.find().lean();
    callback(null, list);
  } catch (e) {
    console.log(e);
    callback(e, null);
  }
};

const create = async (data, callback) => {
  try {
    const created = await Whiteboard.create(data);
    callback(null, created);
  } catch (e) {
    console.log(e);
    callback(e, null);
  }
};

const update = async (whiteboard_id, data, callback) => {
  try {
    const created = await Whiteboard.findByIdAndUpdate(whiteboard_id, data, {
      new: true,
    });
    callback(null, created);
  } catch (e) {
    console.log(e);
    callback(e, null);
  }
};

const remove = async (whiteboard_id, callback) => {
  try {
    const board = await Whiteboard.findByIdAndDelete(whiteboard_id);
    callback(null, board);
  } catch (e) {
    callback(e, null);
  }
};

export default {
  create,
  list,
  getById,
  update,
  remove,
};
