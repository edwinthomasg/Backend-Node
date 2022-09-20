const { readFile } = require("fs");

const xmlParse = require("xml-parse");

let display = (statement, result) => {
  console.log(statement + ":");
  console.dir(result, { depth: null });
};

readFile("../info.xml", "utf-8", (err, data) => {
  if (err) throw err;
  let xmlDoc = new xmlParse.DOM(xmlParse.parse(data));
  let { document } = xmlDoc;
  //will return all the child nodes from result
  let element = document.getElementsByTagName("result")[0];
    display("result data ",element)
  element.removeChild(element.childNodes[0]);
  //   display("after removing ",element)
  element.childNodes.forEach((node) => {
    console.log(node);
    if (node.type === "element") {
      console.log(node.type);
      node.attributes.edit = "false";
    }
  });
    display("after adding the project child ",element)
    let project = {
        type: "element",
        tagName: "project",
        childNodes: [
          {
            type: "text",
            text: "ecommerce",
          },
        ],
      };
      element.appendChild(project);
      display("after adding the allocation before project",element)
      element.insertBefore({
        type: "element",
        tagName: "allocation",
        childNodes: [
          {
            type: "text",
            text: "100%",
          },
        ],
      },
      project) 
});
