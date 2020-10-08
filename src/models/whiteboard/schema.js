import { Schema } from 'mongoose';

const whiteboard = new Schema({
  title: { type: String, index: true },
  hidden: false,
  user_id: String,
  data: Object,
});

module.exports = whiteboard;
