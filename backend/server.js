// server.js

import 'rootpath';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from './helpers/jwt';
import errorHandler from './helpers/error-handler';
import { getSecrets } from './secrets';

//import User from './models/user';
import Book from './models/book';

// creating instances
const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;

// db configuration, setting URI from mLab
// mongoose.connect(getSecrets('dbUri'), { useNewUrlParser: true });
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error'));

// configure API to use bodyParser and look for JSON in the request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// set the route and initialize the API
/* router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
}); */

/* router.get('/book', (req, res) => {
  Book.find((err, book) => {
    if (err) return res.json({ success: false, error: err});
    return res.json({ success: true, data: book });
  });
}); */

/* router.post('/book', (req, res) => {
  const book = new Book();
  const { id } = req.body;
  console.log('body: ', req.body);
  if (!id){ // TODO: update with more fields
    return res.json({
      success: false,
      error: 'No book id was provided.'
    });
  }
  book.id = id;
  book.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
}); */

// use the router configuration when we call /api
app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
