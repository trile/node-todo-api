/**
 * Created by trile on 12/8/16.
 */
let express = require('express');
let bodyParser = require('body-parser');

let PORT = process.env.PORT || 3000;

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    // console.log(req.body);
    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then(
        (doc) => res.send(doc),
        (err) => res.status(400).send(err)
    );
});

app.get('/todos', (req, res) => {
    Todo.find().then(
        (todos) => res.send({todos}),
        (err) => res.status(400).send(err)
    )
});

app.listen(PORT, () => {
    console.log('Starting server on port:', PORT);
});

module.exports = { app };
