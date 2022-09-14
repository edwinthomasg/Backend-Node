const fs = require('fs')

process.stdin.on('data', (data) => {
    // console.log(`received here : ${data.toString()} \n`)
    console.log("log...\n")
    fs.writeFile('./new.txt',data.toString(),() => console.log("done..."))
})