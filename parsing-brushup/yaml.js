const { writeFile } = require("fs");
const yaml = require("js-yaml");

let cricket = 
  {
    name: "virat",
    matches: 20,
    runs: 1350,
    avg: 80,
    nation: "India",
    playedAgainst: {
        australia: 200,
        pakistan: 150,
        england: 180,
        southAfrica: 100
    }
  }
  

let yamlData = yaml.dump(cricket)
console.log(yamlData)
writeFile('./cricket.yaml',yamlData,() => console.log("content written done"))