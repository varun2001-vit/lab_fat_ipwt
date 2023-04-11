const Emitter = require("events")
const eventEmitter = new Emitter();
eventEmitter.on("sez",function(){
    console.log("sezz hogya bro");
    setTimeout(function(){
        console.log("phir karle bro")
    },3000);
})
eventEmitter.emit("sez")