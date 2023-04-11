const MongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017"
const dbname="fruitsDB"
const client= new MongoClient(url)

async function dbConnection() {
    let result =await client.connect();
    console.log('Connected successfully to server');
    const db=result.db(dbname)
    return db.collection('fruits')
}
module.exports=dbConnection