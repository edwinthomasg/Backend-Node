const { readFile, writeFile } = require("fs");
const parse = require("xml2js-parser").parseString;
const xml = require("xml2js");

let parser = new xml.Parser();

readFile("./movie.xml", "utf-8", (err, data) => {
  parser.parseString(data, (err, data) => {
  });
});

let nameToUpperCase = (name) => {
  return name.toUpperCase()
};

readFile("./movie.xml", "utf-8", (err, content) => {
  if (err) throw err;
  parse(
    content,
    {
      tagNameProcessors: [nameToUpperCase],
      attrNameProcessors: [nameToUpperCase],
      valueProcessors: [nameToUpperCase],
      attrValueProcessors: [nameToUpperCase],
      explicitRoot: true,
      explicitArray: false,
    //   ignoreAttrs: true,
      mergeAttrs: true,
      explicitChildren : true,
    },
    (err, data) => console.dir(data, { depth: null })
  );
});


