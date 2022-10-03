const { fork } = require("child_process");
const express = require("express");

const task = require("./task");

const app = express();

app.get("/", (req, res) => {
  let result = task()
  res.send({result})
});
app.get("/message", () => {

})
app.listen(4000, () => {
  console.log("server listening on port 4000");
});

