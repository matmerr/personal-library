
import { getSecrets } from '../secrets.js';
import mongoose from 'mongoose';

// db configuration, setting URI from mLab
mongoose.connect(getSecrets('dbUri'), { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/users.model')
};