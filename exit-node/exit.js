const toUpper = (name) => name.toUpperCase()

console.log("Timer Started ...")

setTimeout(() => {
    const result = toUpper('edwin')
    console.log("result : ",result)
    process.exit(0)
},3000)

process.on('exit', (code) => console.log(`Process exited with code ${code}`))