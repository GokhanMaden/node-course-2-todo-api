// const MongoClient = require("mongodb").MongoClient;
const {
  MongoClient,
  ObjectID
} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", {
    useNewUrlParser: true
  },
  (err, client) => {
    if (err) {
      return console.log("Unable to connet to MongoDB server");
    }
    console.log("Connected to MongoDB server.");
    const db = client.db("TodoApp");

    // GET ALL
    // db.collection("Todos").find({
    //     _id: new ObjectID("5bb0b29a2af391047bf4a114")
    //   }).toArray()
    //   .then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    //   }, (err) => {
    //     console.log("err: ", err);
    //   });

    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then((count) => {
    //     console.log("Todos count: ", count);
    //   })
    db.collection("Users").find({
      name: "Gokhan Maden"
    })
    .count()
    .then((count) => {
      console.log("Name of Gokhan Maden record number: ", count)
    })

    db.collection("Users").find({
      name: "Gokhan Maden"
    })
    .toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log("error: ", err);
    })


    // client.close();
  });