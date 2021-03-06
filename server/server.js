var express = require("express");
var bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");

var app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    completedAt: new Date()
  });
  
  todo.save().then((doc) => {
    res.status(200).send(doc);
  }, (err) => {
    res.status(400).send(err);
  })
});

app.get("/todos", (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (err) => {
    return res.status(400).send(err);
  })
});

app.listen(3001, () => {
  console.log("Started on port 3001!")
})

module.exports = {app};