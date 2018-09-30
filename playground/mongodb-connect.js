const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true },
  (err, client) => {
    if(err) {
      return console.log("Unable to connet to MongoDB server");
    }
    console.log("Connected to MongoDB server.");
    const db = client.db("TodoApp");

    //new collection here!
    // db.collection("Todos").insertOne({
    //   text: "Something to do",
    //   completed: false

    // }, (err, result) => {
    //   if (err) {
    //     return console.log("Insert unable todo", err);
    //   }

    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection("Users").insertOne({
      name: "Gokhan Maden",
      age: 31,
      location: "Istanbul"
    }, (err, result) => {
      if (err) {
        return console.log("Unable to insert User!..", err);
      }

      console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    })

    client.close();
  })