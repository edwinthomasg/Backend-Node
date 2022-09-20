const { readFile } = require("fs");

const xmlParse = require("xml-parse");

let display = (statement, result) => {
  console.log(statement + ":");
  console.log(result, { depth: null });
};

readFile("../data.xml", "utf-8", (err, data) => {
  if (err) throw err;
  let xmlDoc = new xmlParse.DOM(xmlParse.parse(data));
  let { document } = xmlDoc;
  //will return all the child nodes from food id = 1
  let element = document.getElementsByTagName("Food")[0];
  //   display("food id : 1", element);
  //will return only the elements that are element type
  let foodElements = element.childNodes.filter((element) => {
    if (element.type === "element") return element;
  });
  //   display("food id : 1 with type element", foodElements);
  //set an attribute for name tag
  foodElements[0].attributes.taste = "spice";
  //   display("food id : 1 after seting a new attribute", foodElements);
  //modify an existing attribute value for price tag
  foodElements[1].attributes.type = "Dollars";
  //   display("food id : 1 after modifying a existing attribute", foodElements);
  //remove childnode
  element.removeChild(element.childNodes[0]);
  //   display("after removing the child", element);
  //add new child
  let newElement = {
    type: "element",
    tagName: "newElement",
    childNodes: [
      {
        type: "text",
        text: "new element added",
      },
    ],
  };
  element.appendChild(newElement);
  // display("after appending the new child", element);
  element.insertBefore({
    type: "element",
    tagName: "beforeElement",
    childNodes: [
      {
        type: "text",
        text: "Inserted before the new element that is appended",
      },
    ],
  },
  newElement) 
  display("after inserting the new child before new element appended", element);
});
