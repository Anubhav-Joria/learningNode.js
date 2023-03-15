const EventEmmiter = require('events');
const event = new EventEmmiter(); // creating instance

const name = "Anubhav";

// listening to the event
event.on("showName", ()=>{
    console.log(`Showing name : ${name}`)
})
event.emit("showName"); // creating an event 

// Passing parameters
event.on("demo", (code, message)=>{
    console.log(`status code: ${code} `)
    console.log(`message: ${message}`)
})
event.emit("demo", 200, "ok")