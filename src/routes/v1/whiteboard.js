import { Router } from 'express';

const controller = require('../../controller/v1/whiteboard.controller');

const router = Router();

router
  .get('/get/:w_id', controller.getById)
  .get('/list', controller.list)
  .post('/save', controller.create)
  .put('/save/:w_id', controller.update)
  .delete('/remove/:w_id', controller.deleteById)
  .delete('/hide/:w_id', controller.hideById);

module.exports = router;
