const dbConnection = require("./mongodbconnection")

async function insert(){
    const db = await dbConnection() //promise is returned so use await
    const object={
        "name":"lichi",
        "rating":10,
        "review":"sucks"
    }
    const result = await db.insertOne(object);
    if(result.acknowledged)
    {
        console.log("Inserted successfully")
    }
}
//insert()
async function insertmany(){
    const db = await dbConnection() //promise is returned so use await
    const ob1={
        "name":"suu",
        "rating":10,
        "review":"sucks"
    }
    const ob2={
        "name":"suuu",
        "rating":10,
        "review":"sucks"
    }
    const result = await db.insertMany([ob1, ob2]);
    if(result.acknowledged)
    {
        console.log("Inserted  many successfully")
    }
}
insertmany()