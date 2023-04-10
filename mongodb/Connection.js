const MongoClient=require('mongodb').MongoClient;
const url="mongodb://localhost:27017"
const dbname="fruitsDB"
const client=new MongoClient(url)

async function connect(){
    let result=await client.connect()
    console.log("connected")
    const data=result.db(dbname)
    return data.collection("fruits")
}
module.exports =connect
