/**
 * Author: Mayur
 */

import { Router } from 'express';

const router = Router();

import controller from '../../controller/v1/connection.controller';

router.get('/', controller.conn);

module.exports = router;
