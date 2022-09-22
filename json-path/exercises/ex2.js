const jp = require("jsonpath");
const { readFile } = require("jsonfile");

readFile("./store.json")
  .then((data) => {
    // //find all the categories
    // extract(data, "$..category");
    // //find all the details that has quantity > 4000
    // extract(data, "$..book..Availability..[?(@.Quantity > 4000)]");
    // //find all the authors
    // extract(data, "$..book..author");
    // //find all the cities
    // extract(data, "$..Address[*]")
    //find all the availabililty with country name
    // extract(data, "$..book..[?(@.Availability)]..Country")
    extract(data, "$..book..Availability..Address..city")
  })
  .catch((err) => {
    console.log(err);
  });

const extract = (data, expression) => {
  display(jp.query(data, expression));
  // display(jp.nodes(data, expression))
};

const display = (result) => {
  console.dir(result, { depth: null });
};
