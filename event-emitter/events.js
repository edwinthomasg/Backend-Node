const events = require("events");

const eventEmitter = new events();

let langs = ["C", "C++", "Java", "Python"];

eventEmitter.on("newEvent", (cLang, javaLang) =>
  console.log("emitted : ", cLang, javaLang)
);

eventEmitter.emit("newEvent", ...langs);
eventEmitter.once(
  "newEvent",
  (
    cLang,
    javaLang //only once the event is getting triggered
  ) => console.log("emitted : ", cLang, javaLang)
);

eventEmitter.on('error', (err) => {
  console.error('oops there was an error');
});
eventEmitter.emit('error', new Error("oops"));
