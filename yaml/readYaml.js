const yaml = require("yaml");
const { readFileSync } = require("fs");

const fileData = readFileSync("./content.yaml", { encoding: "utf-8" });
const parsedData = yaml.parse(fileData); //yaml to json data


const multiData = readFileSync("./multi.yaml", { encoding: "utf-8" });
const multiParsedData = yaml.parseAllDocuments(multiData); //throws error because it can parse only single doc of yaml

console.log(parsedData);
console.log(multiParsedData);

console.log(JSON.stringify(parsedData,null,2))