const DBConnection= require('./mongodbconnection')

async function update(){
    const db= await DBConnection()
    const result= await db.updateOne({"name":"suuu"},{$set:{"name":"KIVI","rating":10}})
    //const result= await db.updateMany({"name":"suuu"},{$set:{"name":"KIVI","rating":10}})
    console.log(result)
    if(result.acknowledged)
    {
        console.log("Updated")
    }
}
update()