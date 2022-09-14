const express = require("express");
const { fork } = require("child_process");

const app = express();
console.log(process.pid);
app.get("/sum", (req, res) => {
  const result = addLargeRangeOfNumbers();
  res.send({ total: result });
});

app.get("/promise", async (req, res) => {
  const result = await addPromise();
  res.send({ total: result });
});

app.get("/process", (req, res) => {
  const forkProcess = fork("./computation.js");
  forkProcess.send("start-computation");
  forkProcess.on("message", (data) => {
    res.send({ total: data });
  });
});

app.listen(5000, () => console.log("Listening on port : 5000"));

async function addLargeRangeOfNumbers() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) sum += i;
  return sum;
}

function addPromise() {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) sum += i;
    resolve(sum);
  });
}
