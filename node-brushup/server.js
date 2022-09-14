const express = require('express')
const fs = require('fs')

const app = express()

app.get('/',(req, res) =>{ 
    const readStream = fs.createReadStream('./huge.txt')
    readStream.pipe(res)
    // fs.readFile('./huge.txt','utf-8',(err, data) => {
    //     if(data)
    //      res.end(data)
    // })
})

app.listen('3470',() => {
    console.log("listening...")
})