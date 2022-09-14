var count = Math.floor(Math.random() * 100);
console.log("child here");
process.on("message", (msg) => {
  console.log("CHILD: message received from parent process", msg);
  count = parseInt(msg) + 1;
  console.log("parsed : ", count);
  console.log("CHILD: +1 from child");
  if (count <= 100) process.send(count);
  else process.exit(1);
});
console.log(count);
process.send(count);
