// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", {
    useNewUrlParser: true
  },
  (err, client) => {
    if (err) {
      return console.log("Unable to connet to MongoDB server");
    }
    console.log("Connected to MongoDB server.");
    const db = client.db("TodoApp");

    //filtreleyip update edeceğin data 
    // db.collection("Todos").findOneAndUpdate({
    //   _id: new ObjectID("5bb0c038b62c58edec6e1d4d")
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => console.log(result));

    db.collection("Users").findOneAndUpdate({
      name: "Azmi Mengü"
    }, {
      $set: {
        name: "Gökhan Cansu"
      },
      $inc: {
        age: 1
      } 
    }, {
      returnOriginal: false
    }).then((result) => console.log(result));

  });