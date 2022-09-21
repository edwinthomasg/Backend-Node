const xml = require("xml-parse");
const xmljs = require("xml2js");
const { writeFile, readFile } = require("fs");

let xmlData = {
  catalog: [
    {
      person: {
        name: "John",
        surname: "Smith",
      },
    },
    {
      person: {
        name: "Abe",
        surname: "Lincoln",
      },
    },
    {
      person: {
        name: "James",
        surname: "Bond",
      },
    },
  ],
};
let builder = new xmljs.Builder();
let xmlConverted = builder.buildObject(xmlData);
writeFile("./catalog.xml", xmlConverted, () => {
  console.log("written succesfully..");
});
readFile("./catalog.xml", "utf-8", (err, data) => {
  if (err) throw err;
  let parsedData = xml.parse(data);
  parsedData
    .find((element) => element.tagName === "catalog")
    .childNodes.filter((node) => node.tagName === "person")
    .forEach((element) => {
      if (element.tagName === "person") {
        element.childNodes.push({
          type: "element",
          tagName: "fullname",
          childNodes: [{ type: "text", text: "FULL NAME" }],
        });
      }
    });
  const editedData = xml.stringify(parsedData)
  console.log(editedData)
  writeFile('./catalog.xml',editedData,() => console.log("file updated successfully.."))
});
