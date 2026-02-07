const { subscribe } = require("diagnostics_channel");
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("Subscribe", () =>{
    console.log("Subscribe to my channel and get a Mommy!! <3")
});

emitter.on("like", () =>{
    console.log("Like the videos and get another Mommy!! <3")
});

emitter.emit("Subscribe");
emitter.emit("like");


emitter.on("share", (username) =>{
    console.log(`\nshare the channel ${username} and get a Mommy!! <3`)
})

emitter.emit("share", "SSJB Forbid");


