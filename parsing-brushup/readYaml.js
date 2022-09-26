const { readFile } = require("fs");
const yaml = require("yaml");

readFile("./data.yaml", "utf-8", (err, data) => {
  if (err) throw err;
  try {
    let parsed = yaml.parseDocument(data);
    console.dir(parsed, { depth: null });
    console.log(parsed.get("totalAvg"))

  } catch (err) {
    console.log(err);
  }
});
