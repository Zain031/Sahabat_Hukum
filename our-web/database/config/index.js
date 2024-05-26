const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://deaandari1712:UPD2vlknVgtwudWW@cluster0.pk10ayw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const database = client.db("db_sahabathukum")
module.exports = {database}
