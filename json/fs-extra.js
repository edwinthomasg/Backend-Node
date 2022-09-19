const { readJSON, writeJSON } = require("fs-extra");

let data = {
  user: "admin",
  name: "joey",
  email: "joey@gmail.com",
  password: "#232912mndmn",
};

//promise approach
writeJSON("./extra.json", data)
  .then(() => console.log("done"))
  .catch((err) => console.log(err));

readJSON("./extra.json")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//async await approach
async function read() {
  try {
    let data = await readJSON("./extra.json");
    console.log(data);
  } catch (err) {
    console.log(`error : ${err}`);
  }
}
read();

//callback approach
readJSON('./extra.json',(err, data) => {
console.log(data)
})
//can be done in callback,promise and async await
