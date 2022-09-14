const { createReadStream } = require('fs')

const readFile = createReadStream('../async.js')

setTimeout(() => {
    readFile.on('data', (data) => console.log(data))
    const firstData = readFile.read(10)
    console.log(firstData)
    const secondData = readFile.read(10)
    console.log("\n",secondData)
},10)

