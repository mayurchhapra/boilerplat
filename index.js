'use strict';

/**
 * Author: Mayur
 * This is the server file with all the requried configurations
 */

import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

import './src/config/database';
import routes from './src/routes/index';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('combined'));

dotenv.config('.env');

routes(app);

app.listen(3000, () => {
  console.log('App started...', process.env.PORT);
});
