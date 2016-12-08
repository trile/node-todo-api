/**
 * Created by trile on 12/8/16.
 */
let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let MONGODB_PATH = process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp';
mongoose.connect(MONGODB_PATH);

module.exports = {mongoose};