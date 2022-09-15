const { readJSON, writeJSON } = require("fs-extra");

let data = {
  user: "admin",
  name: "joey",
  email: "joey@gmail.com",
  password: "#232912mndmn",
};

writeJSON("./extra.json", data)
  .then(() => console.log("done"))
  .catch((err) => console.log(err));

readJSON("./extra.json")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

async function read() {
  try {
    let data = await readJSON("./extra.json");
    console.log(data);
  } catch (err) {
    console.log(`error : ${err}`);
  }
}
read();
//can be done in callback,promise and async await
