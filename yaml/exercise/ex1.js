const yaml = require("js-yaml");
const { readFile, writeFile } = require("fs");
const express = require("express");

const app = express();
app.use(express.json())

app.get("/bookings", (req, res) => {
  readFile("./bookings.yaml", "utf-8", (err, data) => {
    try {
      if (err) throw err;
      let yamlData = yaml.load(data);
      res.send(yamlData);
    } catch (err) {
      console.log(err.message);
    }
  });
});

app.post("/bookings", (req, res) => {
    console.log(req.body)
    writeFile('./movie-bookings.yaml',yaml.dump(req.body),() => {
    console.log("yaml file generated for movie bookings")
    })
});

app.listen(3030, () => console.log("server listening on port 3030"));
