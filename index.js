'use strict';

/**
 * Author: Mayur
 * This is the server file with all the requried configurations
 */
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import './src/config/database';
import routes from './src/routes/index';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

routes(app);

app.listen(3000, () => {
  console.log('Application has been started on PORT:', process.env.PORT);
});
