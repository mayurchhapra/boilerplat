/**
 * Author: Mayur
 */

import { Schema } from 'mongoose';

const whiteboard = new Schema(
  {
    title: { type: String, index: true },
    hidden: false,
    user_id: String,
    data: Object,
  },
  { versionKey: false, timestamps: true }
);

module.exports = whiteboard;
