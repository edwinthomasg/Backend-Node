const { readFile, writeFile } = require("fs");
const parse = require("xml2js-parser").parseString;
const xml = require("xml2js");

let parser = new xml.Parser();
let newObject = {
  user: {
    name: "edwin",
    age: 22,
    stack: "mern",
    $: {
      xmlns: "user",
    },
  },
  company: {
    name: "aspire",
    location: "chennai",
    $: {
      xmlns: "company",
    },
  },
};

let builder = new xml.Builder({rootName: 'result',xmldec:{version:'1.0',standalone:'yes', encoding:'utf-8'},headless:true});
let xmlData = builder.buildObject(newObject);
console.log(xmlData)
writeFile("./info.xml", xmlData, () => console.log("written sucessfully"));
readFile("./data.xml", "utf-8", (err, data) => {
  parser.parseString(data, (err, data) => {
    console.log(data);
  });
});

let nameToUpperCase = (name) => {
  // console.log("name : ", name);
  return name.toUpperCase();
};
let modifyAttrKey = (key) => {
  console.log(key);
};
readFile("./data.xml", "utf-8", (err, content) => {
  if (err) throw err;
  parse(
    content,
    {
      // tagNameProcessors: [nameToUpperCase],
      // attrNameProcessors: [nameToUpperCase],
      // valueProcessors: [nameToUpperCase],
      // attrValueProcessors: [nameToUpperCase],
      // normalizeTags: true,
      explicitRoot: true,
      explicitArray: false,
      // ignoreAttrs: true,
      // mergeAttrs: true,
      emptyTag: 'end message',
      explicitChildren : true,
    },
    (err, data) => console.dir(data, { depth: null })
  );
});


