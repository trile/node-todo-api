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

   db.collection('Todos').find({
       _id: new ObjectID('5847718945dae903446acc2d')
   }).toArray().then((docs)=> {
       console.log('Todos');
       console.log(JSON.stringify(docs, undefined, 2) )
   }, (err) => {
      console.log('Unable to fetch todos', err);
   });

    db.collection('Users').find({
        name: 'Andrew'
    }).toArray()
    .then((docs)=> {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2) )
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

   // db.collection('Users').find().count().then((count)=> {
   //     console.log(`Users count: ${count}`)
   // }, (err) => {
   //    console.log('Unable to fetch todos', err);
   // });

   // db.close(); // this should be inside the successful case
});