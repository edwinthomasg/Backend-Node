process.on("exit", (code) => {
  console.log(`exited with code ${code}`);
});

process.on("beforeExit", () => {
  display("thank you have a nice day");
});

const toUpper = (name) => name.toUpperCase();

console.log("Timer Started ...");

setTimeout(() => {
  const result = toUpper("edwin");
  console.log("result : ", result);
}, 3000);

const display = (msg) => console.log(msg);
