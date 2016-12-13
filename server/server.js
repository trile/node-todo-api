/**
 * Created by trile on 12/8/16.
 */
require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');
let {authenticate} = require('./middlewares/authenticate');

let app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    let now = new Date().toString();
    console.log(`${now}: ${req.method} ${req.url}`);
    next();
});

/* Todos routes */
app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });
    todo.save().then(
        () => res.send(todo),
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
    let id = req.params.id;
    if (!ObjectID.isValid(id)) return res.status(404).send();
    Todo.findById(id)
        .then((todo) => {
            if (!todo) return res.status(404).send();
            res.send({todo});
        }).catch((err) => res.status(400).send(err) );
});

app.delete('/todos/:id', (req, res) => {
    let id = req.params.id;
    if (!ObjectID.isValid(id)) return res.status(404).send();
    Todo.findByIdAndRemove(id)
        .then((todo) => {
            if (!todo) return res.status(404).send();
            res.send({todo});
        }).catch((err) => res.status(400).send(err));
});

app.patch('/todos/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed']);
    if (!ObjectID.isValid(id)) return res.status(404).send();

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) return res.status(404).send();
        res.send({todo});
    }).catch((err) => res.status(400).send());

});

/* Users routes */
app.post('/users', (req, res) => {
    console.log('Adding new user');
    let body = _.pick(req.body, ['email', 'password']);
    console.log(body);
    let user = new User(body);

    user.save().then(() => {
        console.log('Successfully insert a new user');
        return user.generateAuthToken();
    }).then((token) => {
        console.log("server: ", token);
        res.header('x-auth', token).send(user);
    }).catch ((err) => {
        console.log('failed to insert new user', err);
        res.status(400).send(err)
    });
});

app.get('/users/me', authenticate, (req, res) => {
    res.send(req.user);
});

app.listen(process.env.PORT, () => {
    console.log(`Starting server on port ${process.env.PORT}`);
});

module.exports = { app };
