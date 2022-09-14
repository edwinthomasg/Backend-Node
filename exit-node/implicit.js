process.on("exit", (code) => console.log(`exited with code ${code}`)); //implicit exit even with async cases too

const toUpper = (name) => name.toUpperCase();

// process.stdin.on('data', (data) => {
//     const result = toUpper(data)
//     process.stdout.write(result)
// })

console.log("Timer Started ...");

setTimeout(() => {
  const result = toUpper("edwin");
  console.log("result : ", result);
}, 3000);

//exited with 0 if no async tasks are pending that is success
//exited with 1 if there is a failure

//special case
process.on("exit", (code) => {
    console.log(`exited with code ${code}`); //executed
    setTimeout(() => console.log("timer function"),0) //listener functions should perform only the sync operations
    console.log("after timer") //executed
  });