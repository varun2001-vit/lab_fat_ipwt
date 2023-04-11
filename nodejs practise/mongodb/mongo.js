var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    let db=result.db("fruitsDB")
    let collection =db.collection("fruits");
    let response = await collection.find({}).toArray();
    console.log(response);
}
getData();