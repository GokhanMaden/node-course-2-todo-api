const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connet to MongoDB server");
  }

  console.log("Connected to MongoDB server.");
  const db = client.db("TodoApp");

  // deleteMany
  // deletes all records which are all same props!

  // db.collection("Todos")
  //   .deleteMany({text: "Eat lunch"})
  //   .then((result) => {
  //     console.log(result);
  //   })

  // deleteOne
  // deletes records which is match first record with same props ie. Eat dinner

  // db.collection("Todos")
  //   .deleteOne({text: "Eat dinner"})
  //   .then((result) => {
  //     console.log(result);
  //   })

  // findOneAndDelete

  // db.collection("Todos")
  //   .findOneAndDelete({text: "Eat breakfast"})
  //   .then((result) => {
  //     console.log(result);
  //   })

  db.collection("Users")
    .deleteMany({name: "Gokhan Maden"})
    .then((result) => {
      console.log(result);
  })

  db.collection("Users").findOneAndDelete({
    _id: new ObjectID("5bb0b434adda39048d824361")
  }).then((result) => {
    console.log(result);
  })

  // db.close();
})