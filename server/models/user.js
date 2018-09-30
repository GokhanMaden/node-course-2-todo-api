var mongoose = require("mongoose");

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

module.exports = {User}