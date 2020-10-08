/**
 * Author: Mayur
 */

import { Router } from 'express';

import controller from '../../controller/v1/whiteboard.controller';

const router = Router();

router
  .get('/get/:whiteboard_id', controller.getById)
  .get('/list', controller.list)
  .post('/save', controller.create)
  .patch('/save/:whiteboard_id', controller.update)
  .delete('/remove/:whiteboard_id', controller.deleteById)
  .delete('/hide/:whiteboard_id', controller.hideById);

module.exports = router;
