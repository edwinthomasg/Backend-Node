const events = require("events");

const eventEmitter = new events();

eventEmitter.once("newListener", (event, listener) => {
  if (event === "print") 
    eventEmitter.on("print", () => console.log("emitted inside new listener"));
});

eventEmitter.on("print", () => console.log("emitted from outside"));

eventEmitter.emit("print");
