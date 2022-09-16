const { writeFile, readFile } = require("jsonfile");
const jp = require("jsonpath");

let jsonData = {
  store: {
    book: [
      {
        category: "reference",
        author: "Nigel Rees",
        title: "Sayings of the Century 1",
        price: 8.95,
      },
      {
        category: "fiction",
        author: "Evelyn Waugh",
        title: "Sword of Honour 2",
        price: 12.99,
      },
      {
        category: "fiction",
        author: "Herman Melville",
        title: "Moby Dick 3",
        isbn: "0-553-21311-3",
        price: 8.99,
      },
      {
        category: "fiction",
        author: "J. R. R. Tolkien",
        title: "The Lord of the Rings 4",
        isbn: "0-395-19395-8",
        price: 22.99,
      },
    ],
    bicycle: {
      author: "hercules",
      color: "red",
      price: 19.95,
    },
  },
  tax: {
    price: 10.09,
    gst: {
      price: 18,
    },
    book: {
      title: "william 5",
      author: "james",
      book: {
        title: "william 6",
      },
    },
  },
};

//creating a new json file
writeFile("./data.json", jsonData, () => {
  console.log("written successfully");
});
//reading the created file
readFile("./data.json")
  .then((data) => {
    // extract(data, "$..store", "all elements inside store"); //will return all the elements inside store
    // extract(data, "$..author", "author"); //will return all the authors
    // extract(data, "$.store..author", "authors inside store"); //will return all authors inside store
    // extract(data, "$.store.book..author", "author inside book from the store"); //will return the authors in book from store
    // extract(data, "$..price", "price"); //will return all the prices inside a document
    // extract(data, "$.store..price", "store price"); //will return all the prices only inside the store
    // extract(data, "$.store.book..category"); //will return all the category fom the array of objects inside book
    // extract(data, "$.store.*", "all items in the store"); //will return all the items of child node inside store
    // extract(data, "$.tax", "tax elements"); //will return only the elements present inside tax
    // extract(data, "$.tax.price", "tax price"); //will return only the child and not nested child
    // extract(data, "$.tax..price", "all tax prices"); //will return all the prices from both child and nested child
    // extract(data, "$..book[1]", "second book"); //will return 2nd book
    // extract(data, "$.store.book[(@.length-1)]", "last book"); //will return the last book
    // extract(data, "$.store.book[-0:]", "books"); //returns all book
    // extract(data, "$.store.book[-1:]", "last book "); //returns last book
    // extract(data, "$.store.book[-2:]", "from last two books"); //returns last two book
    // extract(data, "$.store.book[-3:]", "from last three books"); //returns last three book
    // extract(data, "$.store.book[-4:]", "from last four books"); //returns last four book , if number extends the range simply presents all the elements
    // extract(data, "$.store.book[:1]", "1st book "); //returns first book
    // extract(data, "$.store.book[:2]", "first two books"); //returns first two book
    // extract(data, "$.store.book[:3]", "first three books"); //returns first three book
    // extract(data, "$.store.book[:4]", "first four books"); //returns first four book , if number extends the range prints all
    // extract(data, "$.store.book[0,1]", "first two books"); //returns first two book , it is a union subcript
    // extract(data, "$.store.book[?(@.price > 10)]", "price of book greater than 10")
    extract(data, "$.store.book[?(@.price > 10)].title", "price of book greater than 10") //returns only the selected field
    extract(data, "$.store.book[?(@.category == \"fiction\" && @.price > 10)]") //return all fiction books where price > 10
    // extract(data, '$.store.book[?(@.title == "Moby Dick 3")].title', "value"); //changes applied in title while returning
    // extract(data, "$..price", "parent")
  })
  .catch((err) => console.log(err));

let extract = (data, expression, search) => {
  display(jp.query(data, expression), search);
  // display(jp.paths(data, expression), search);
  // display(jp.nodes(data, expression), search);
  // display(jp.value(data, expression), search);
  // display(jp.parent(data, expression), search);
  // display(jp.apply(data, expression, (value) => value.toUpperCase()));
  // display(jp.parse('$..author'))
};

let display = (result, search = "result") => {
  //   let expression = jp.stringify(result[0].path);
  //   console.log(expression);
  console.log(search + ":");
  console.dir(result, { depth: null });
};
