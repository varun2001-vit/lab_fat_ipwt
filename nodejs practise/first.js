//console.log("hi");
const fs=require('fs');
const os=require('os');
//const varun=require('./second.js');
//console.log(varun)
//---basic commands from os library
console.log(os.freemem())
console.log(os.hostname())
console.log(os.release())
console.log(os.version())
console.log(os.uptime())
//---basic commands from fs library
// fs.readFile("./test.txt","utf8",function(err,data){
//     console.log(data);
// })
const a=fs.readFileSync("./test.txt","utf8",function(err,data){
    console.log(data);
})
console.log(a.toString())

console.log("done reading");//done reading is printed before due to asynchronous call in readfile
fs.writeFile("./test2.txt","chup madarchod",function(err,data){
    console.log("done writing");//done writing is printed before due to asynchronous call in writefile
})
const b=fs.writeFileSync("./test.txt","chp bc",function(err,data){
    console.log("hogya");
})
