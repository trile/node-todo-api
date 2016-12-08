/**
 * Created by trile on 12/8/16.
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let todoSchema = new Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

let Todo = mongoose.model('Todo',  todoSchema);

module.exports = {Todo};