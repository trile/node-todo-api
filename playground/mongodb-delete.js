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

    // delete Many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
        console.log(result);
    });

    // delete One
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // delete One
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({name: 'Mike'}).then((result) => {
        console.log(result);
    });



   // db.close(); // this should be inside the successful case
});