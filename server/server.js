var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true });

// var Todo = mongoose.model("Todo", {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });


var User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: true
  }
})

var newUser = new User({
  name: "Azmi Mengü",
  email: "azmimengu@azmi.com"
})

// var newTodo = new Todo({
//   text: "Walk with Maya222!"
// });

newUser.save().then((doc) => {
  console.log("Saved TODO: ", doc)
  console.log(JSON.stringify(doc, undefined, 2))
}, (err) => {
  console.log(err);
})

// newTodo.save().then((doc) => {
//   console.log("Saved TODO: ", doc)
//   console.log(JSON.stringify(doc, undefined, 2))
// }, (err) => {
//   console.log("unable to save todo")
// })