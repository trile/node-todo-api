/**
 * Created by trile on 12/8/16.
 */
let express = require('express');
let bodyParser = require('body-parser');

let PORT = process.env.PORT || 3000;

let {mongoose} = require('./db/mongoose');
const {ObjectID} = require('mongodb');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    let now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});

app.post('/todos', (req, res) => {
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
    );
});

app.get('/todos/:id', (req, res) => {
    id = req.params.id;
    if (!ObjectID.isValid(id)) return res.status(404).send();
    Todo.findById(id)
        .then((todo) => {
            if (!todo) return res.status(404).send();
            res.send(todo);
        }).catch((err) => res.status(400).send(err) );
});

app.delete('/todos/:id', (req, res) => {
    id = req.params.id;
    if (!ObjectID.isValid(id)) return res.status(404).send();
    Todo.findByIdAndRemove(id)
        .then((todo) => {
            if (!todo) return res.status(404).send();
            res.send(todo);
        }).catch((err) => res.status(400).send(err));
});

app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}`);
});

module.exports = { app };
