const xml = require("xml-parse");
const { readFile, writeFile } = require("fs");
const xmljs = require("xml2js");

const printLine = () =>
  console.log(
    "----------------------------------------------------------------------------------------------------------------------"
  );
const printData = (statement, result) => {
  console.log(statement + ":");
  console.dir(result, { depth: null });
  printLine();
};

let xmlData = {
  bookstore: [
    {
      book: {
        $: {
          category: "COOKING",
        },
        title: {
          $: {
            lang: "en",
          },
          _: "Samayal",
        },
        author: "Chennai Foods",
        year: "2005",
        price: 30.0,
      },
    },
    {
      book: {
        $: {
          category: "CHILDREN",
        },
        title: {
          $: {
            lang: "en",
          },
          _: "Kutti story",
        },
        author: "William",
        year: "2004",
        price: 40.0,
      },
    },
    {
      book: {
        $: {
          category: "WEB",
        },
        title: {
          $: {
            lang: "en",
          },
          _: "React",
        },
        author: "Code Developer",
        year: "2000",
        price: 20.0,
      },
    },
  ],
};

let builder = new xmljs.Builder();
let xmlConvertData = builder.buildObject(xmlData);
let parser = new xmljs.Parser({
  mergeAttrs: true,
  explicitArray: false,
  explicitRoot: false,
  trim: false,
});
console.log(xmlConvertData);
printLine();
xmlConvertData = xmlConvertData.replaceAll(/\s+(?=<)/ig, "");

writeFile("./book.xml", xmlConvertData, () => {
  console.log("file written successfully..");
});

readFile("./book.xml", "utf-8", (err, data) => {
  if (err) throw err;
  let parsedXml = xml.parse(data);
  printData("parsed data", parsedXml);
  parser.parseString(data, (err, result) => {
    printData("to upper case : ", result);
  });
  let xmlDOm = new xml.DOM(parsedXml);
  printData("xml dom", xmlDOm);
  let { document } = xmlDOm;
  document.getElementsByAttribute(
    "category",
    "CHILDREN"
  )[0].attributes.category = "children";
  printData("after updating the attribute", parsedXml);
  let editedData = xml.stringify(parsedXml);
  editedData = editedData.replaceAll("\n", "");
  writeFile("./book.xml", editedData, () => {
    console.log("file edited succesfully");
    readFile("./book.xml", "utf-8", (err, data) => {
      if (err) throw err;
      console.dir(xml.parse(data), { depth: null });
    });
  });
});
