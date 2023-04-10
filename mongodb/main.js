const connection=require("./Connection");
const prompt=require("prompt-sync")();

async function add(){
    const connect =await connection()
    obj={
        "name":"sid",
        "rating":4,
        "review":"good"
    }
   const result=await connect.insertOne(obj)
   //const result=await connect.insertManu([obj1,obj2])
   if(result.acknowledged)
   {
    console.log("successfully inserted")
   }
}
//add()
async function read(){
    const connect= await connection()
    const result=await connect.find().toArray();
    console.log(result)

}
//read()

async function readOne(){
    const connect= await connection()
    const result=await connect.find({"name":"sid"}).toArray();
    console.log(result)
}
//readOne()
async function update(){
    const connect= await connection()
    const result=await connect.updateOne({name: "sid"},{$set:{"name":"sid","rating":5,"review":"loda"}})
    if(result.acknowledged)
    {
        console.log("updated")
    }
}
//update
async function del(){
    const connect= await connection()
    var user=prompt("enter the name to delete")
    const result= await connect.deleteOne({"name":user})
    if(result.acknowledged)
    {
        console.log("deleted")
    }
    else{
        console.log("error")
    }
}
del()