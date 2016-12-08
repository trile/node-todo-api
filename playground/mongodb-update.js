/**
 * Created by trile on 12/6/16.
 */
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
       return console.log('Unable to connect to MongoDB server')
   }
   console.log('Connected to MongoDB server');

   // db.collection('Todos').findOneAndUpdate(
   //      {_id: new ObjectID('584891dc0de578ac3486a2b3')},
   //      {$set: {completed: true}},
   //      {returnOriginal: false}
   // ).then((result) => {
   //     console.log(JSON.stringify(result, undefined, 2));
   // });

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('584768bc420aae26c5da75b1')},
        {
            $set: {name: 'Minh Le'},
            $inc: {age: 1}
        },
        {returnOriginal: false}
    ).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }).catch((err)=> {
        console.log('Unable to update User: ', err);
    });

   //db.close(); // this should be inside the successful case
});