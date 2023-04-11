const DBConnection=require("./mongodbconnection")
async function deleted()
{
    const db=await DBConnection();//returns response as promise
    const result=await db.deleteOne({name:"KIVI"})
    //const result=await db.deleteMany({name:"KIVI"})
    console.log(result);
    if(result.acknowledged)
    {
        console.log("deleted successfully")
    }
}
deleted();