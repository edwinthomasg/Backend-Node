function doComputation(){
    let sum = 0
    for( var i = 0; i < 1e9; i++)
        sum += i
    return sum
}

process.on('message', () => {
    const result = doComputation()
    console.log("result : ",result)
    process.send(result)
})

