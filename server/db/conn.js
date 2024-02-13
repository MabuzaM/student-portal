const { MongoClient } = require("mongodb");
const Db = "mongodb://localhost:27017";
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: (callback) => {
    client.connect((err, db) => {
      //verify if we have a good db object
      if (db) {
        db.json();
      }
    })
  }
}
