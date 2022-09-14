const yaml = require("js-yaml");
const fs = require("fs");

let fileData = fs.readFileSync("./content.yaml", { encoding: "utf-8" });
let singleDocument = yaml.load(fileData); //it will parse yaml data to json format not the multiple yaml document
let multiData = fs.readFileSync("./multi.yaml", { encoding: "utf-8" });
let multipleDocument = yaml.loadAll(multiData); //it will parse yaml to json format even it has multiple yaml document

console.log(singleDocument);
console.log(multipleDocument);

