const xml = require("xml-parse");
const xmljs = require("xml2js");
const { writeFile, readFile } = require("fs");

const rootData = {
  note: {
    to: {
      _: "Joey",
    },
    from: {
      _: "Chandler",
    },
    heading: {
      _: "Reminder",
    },
    body: {
      _: "Dont forget me this weekend",
    },
  },
};

const printLine = () =>
  console.log(
    "----------------------------------------------------------------------------------------------------------------------"
  );
const printData = (statement, result) => {
  console.log(statement + ":");
  console.dir(result, { depth: null });
  printLine();
};

let builder = new xmljs.Builder();

console.log(builder.buildObject(rootData));

// writeFile("./root.xml", builder.buildObject(rootData), () => {
//   console.log("data written succesfully");
//   printLine();
// });

readFile("./root.xml", "utf-8", (err, data) => {
  if (err) throw err;
  let parseXml = xml.parse(data);
  printData("parsed data", parseXml);
  let xmlDom = new xml.DOM(parseXml);
  printData("parsed document", xmlDom);
  let { document } = xmlDom;
  printData("document object", document);
  let childNodeTo = document.getElementsByTagName("to")[0];
  printData("to", childNodeTo);
  let toTagTextContent = document.getElementsByTagName("to")[0].innerXML   //or
  printData("to inner text", toTagTextContent);
  let toTagTextContent_ = document.getElementsByTagName("to")[0].childNodes[0].text
  printData("to inner text", toTagTextContent_);
  document.getElementsByTagName("body")[0].getElementsByCheckFunction(element => {
    if(element.type === 'text')
      element.text = 'Don\'t forget me this weekend...'
  })
  let bodyNode = document.getElementsByTagName("body")
  printData("after modifying the attribute", bodyNode);
  let childNodeToParent = document.getElementsByTagName('to')[0].parentNode
  printData("to's parent",childNodeToParent)
  let noteDoc = document.getElementsByTagName("note")[0]
  printData("note doc",noteDoc)
  console.log("length : ",noteDoc.childNodes.length)
  let endData = {
    type: "element",
    tagName: "endMessage",
    childNodes: [{
      type: "text",
      text: "Thanks for using our service , happy day :)"
    }]
  }
  noteDoc.appendChild(endData)
  printData("after appending note doc",noteDoc)
  console.log("length : ",noteDoc.childNodes.length)
  noteDoc.insertBefore({
    type: "element",
    tagName: "like",
    childNodes:[{
      type: "text",
      text: "liked"
    }]
  },endData)
  printData("after appending note doc",noteDoc)
  console.log("length : ",noteDoc.childNodes.length)
  let editedXmlData = xml.stringify(parseXml)
  writeFile('./root.xml',editedXmlData, () => console.log("xml file updated successfully"))
});
