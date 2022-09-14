process.on('message', (number) => {
    let result = isPrime(number)
    process.send(result)
    process.exit()
})

let isPrime = (number) => {
    console.log("num : ", typeof number)
    let count = 0
    let isPrime = true
    for(var i = 3; i < number; i++,count++){
        if(number % i === 0)
          {
            isPrime = false
          }
    }
    console.log(count)
    return {
        number ,
        prime : isPrime,
    }
}
