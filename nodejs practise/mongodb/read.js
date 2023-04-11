const dbConnection = require("./mongodbconnection")
//1st method
// dbConnection().then(function(response) {
//     response.find().toArray().then(function(result) {
//         console.log('data',result);
//     })
    
// })
//2nd method
async function handle(){
    let data = await dbConnection();
    data=await data.find().toArray();
    console.log('data',data);
}
handle()