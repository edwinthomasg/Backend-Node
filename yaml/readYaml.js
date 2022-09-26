const yaml = require("yaml");
const { readFileSync, writeFile } = require("fs");

const fileData = readFileSync("./content.yaml", { encoding: "utf-8" });
const parsedData = yaml.parseDocument(fileData); //yaml to json data

const multiData = readFileSync("./multi.yaml", { encoding: "utf-8" });
const multiParsedData = yaml.parseAllDocuments(multiData); //throws error because it can parse only single doc of yaml

// console.log("contents : ",parsedData);
console.dir(parsedData,{depth: null});

// console.log("json stringify : ",JSON.stringify(parsedData,null,2)) //stringified

// let result = yaml.stringify(parsedData) 
// console.log("yaml stringify : ",result) //yml representation string
// console.log("string to json : ",yaml.parse(result)) //string to json data

// let newYamlDoc = new yaml.Document()
// newYamlDoc.version = true
// newYamlDoc.commentBefore = 'Newly Created Yaml Document'
// newYamlDoc.contents = ['react','node','express','mongo', { stack : 'mern' }]
// console.log(String(newYamlDoc))
// console.log(yaml.stringify(newYamlDoc))

// writeFile('./newDocument.yaml',String(newYamlDoc),() => {
//     console.log('successfully written ...')
// })

// const doc = new yaml.Document()
// doc.version = true
// doc.commentBefore = ' A commented document'
// doc.contents = ['some', 'values', { balloons: 99 }]

// //doc methods
// console.log(parsedData.get('title'))
// console.log(newYamlDoc.toJSON()) //json representation
// console.log(newYamlDoc.toString()) //yaml representation