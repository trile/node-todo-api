/**
 * Created by trile on 12/9/16.
 */
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//    console.log(result)
// });

Todo.findOneAndRemove({_id:'584a15810de578ac3486a2b6'})
    .then((todo) => {
        if (!todo) {
            return console.log('Todo not found');
        }
        console.log(todo);
    }).catch((err) => console.log(err));

// Todo.findByIdAndRemove('584a14d00de578ac3486a2b5').then((todo) => {
//     console.log(todo);
// });

mongoose.disconnect();
