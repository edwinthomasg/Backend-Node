const fs = require('fs')

fs.readFile('./info.txt',(err,  data) => {
    if(err) console.log(err)
    console.log("data : ",data.toString())
})

const fileData = fs.readFileSync('./info.txt')
console.log("sync data : ",fileData.toString())

const asynCFun = async() => {
    console.log("Async")
}
const asynCFun1 = async() => {
    console.log("Async1")
}

asynCFun()
asynCFun1()
