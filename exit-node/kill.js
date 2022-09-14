const toUpper = (name) => name.toUpperCase()

console.log("Timer Started ...",process.pid)

setInterval(() => {
    const result = toUpper('edwin')
    console.log("result : ",result)
    
},1000)

process.on('SIGHUP', () => {
    console.log(`SIGHUP`)
})

process.on('SIGINT', () => {
    console.log(`SIGINT`)
})