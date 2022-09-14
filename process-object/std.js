process.stdin.on('data', (data) => {
    process.stdout.write(`data : ${data.toString()}`)
    // process.exit(1)
})

process.on('exit',() => console.log("exited"))
