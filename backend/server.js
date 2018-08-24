// server.js

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import { getSecret } from './secrets';

// creating instances
const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;

// db configuration, setting URI from mLab
mongoose.connect(getSecret('dbUri'));
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));

// configure API to use bodyParser and look for JSON in the request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// set the route and initialize the API
router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// use the router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
