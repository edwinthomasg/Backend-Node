const xml = require("xml2js");
const fs = require("fs");

const parser = new xml.Parser();

// fs.readFile("./data.xml", "utf-8", (err, data) => {
//   if (err) throw err;
//   parser.parseString(data, (err, data) => {
//     console.dir(data, { depth: null });
//     console.log(data.customer)
//   });
// });

// //promise based approach
// fs.readFile("./data.xml", "utf-8", (err, data) => {
//   if (err) throw err;
//   parser
//     .parseStringPromise(data)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// });

//without parser
fs.readFile("./data.xml", "utf-8", (err, data) => {
  if (err) throw err;
  xml
    .parseStringPromise(data)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

let product = {
  name: "iphone",
  price: 80000,
  color: ["red", "black"],
  sale: true,
  stock: {
    red: 20,
    black: 15,
  },
};
let attributeXml = {
  root: {
    $: {
      id: "my-id",
    },
    _: "inner text",
  },
};
let xmlns = {
  user: {
    name: { _: "edwin" },
    $: {
      xmlns: "http://google.com/user",
    },
  },
  office: {
    name: "aspire",
    $: {
      xmlns: "http://google.com/office",
    },
  },
};
let builder = new xml.Builder();

let xmlData = builder.buildObject(product);
let attributeData = builder.buildObject(attributeXml);
let xmlnsData = builder.buildObject(xmlns);

console.log(xmlData);
console.log(attributeData);
console.log(xmlnsData);
