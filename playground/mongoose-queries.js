/**
 * Created by trile on 12/9/16.
 */
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '584968ac19e0550ae40f573e';
let id_not_found = '684968ac19e0550ae40f573e';
let id_not_valid = '584968ac19e0550ae40f573e123';

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });
//
// Todo.findOne({_id: id})
//     .then((todo) => {
//         console.log('Todo: ', todo);
//     });
//
// Todo.findById(id)
//     .then((todo) => {
//         console.log('Todo: ', todo);
//     });
//
// Todo.findById(id_not_found)
//     .then((todo) => {
//         if (!todo) {
//             return console.log(`id ${id_not_found} not found`);
//         }
//         console.log('Todo: ', todo);
//     });
//
// if (!ObjectID.isValid(id_not_valid)) {
//     console.log('ID not valid');
// }

Todo.findById(id_not_valid)
    .then((todo) => {
        if (!todo) return console.log(`Todo ${id_not_valid} was not found`);
        console.log('Todo: ', todo);
    }).catch((err) => console.log(err));

// let user_id = '5848ce4fca217f071d6dd16a';
//
// User.findById(user_id)
//     .then((user) => {
//         if (!user) return console.log(`User ${user_id} was not found`);
//         console.log(user);
//     }).catch((err) => console.log(err));

mongoose.disconnect();

