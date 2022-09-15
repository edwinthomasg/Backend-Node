const { writeFile } = require('fs')
const yaml = require('js-yaml')

let config = {
  name: "server",
  version: "0.0.1",
  private: true,
  scripts: {
    start: "node test.js",
    "start-dev": "source dev.env; node test.js",
    "start-prod": "source prod.env; node test.js",
  },
  dependencies: {
    mysql: "*",
  },
  tech: ["mongo","express"]
};

const yamlData = yaml.dump(config) //to convert json to yaml representation
console.log(yamlData)

writeFile('./package.yaml',yamlData,() => console.log('file written succesfully..'))





