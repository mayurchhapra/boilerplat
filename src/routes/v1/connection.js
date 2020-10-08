import { Router } from 'express';

const router = Router();

const controller = require('../../controller/v1/connection.controller');

router.get('/', controller.conn);

module.exports = router;
