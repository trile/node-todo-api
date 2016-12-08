/**
 * Created by trile on 12/8/16.
 */
let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let MONGO_PATH = process.env.MONGO_URI || 'mongodb://localhost:27017/TodoApp';
mongoose.connect(MONGO_PATH);

module.exports = {mongoose};