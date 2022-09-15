const { readFile, writeFile } = require("jsonfile");

let config = {
  domain: "aspire",
  port: 3470,
};

readFile("./config.json", (err, data) => {
  console.log(data); //here no need to parse these modules will take care on that
});

writeFile("./config_2.json", config, { spaces: 2, EOL: "\n" }, () =>
  console.log("written succesfully")
); //

//also supports promise based approach
readFile("./config.json")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

config = { key: 893478389721 };

writeFile("./config_2.json", config, { flag: "a" }, () => { //append functionality by specifying the flag
  console.log("written successfully");
});
