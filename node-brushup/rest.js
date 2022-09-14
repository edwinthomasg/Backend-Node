const fun = (...rest) => {
    const result = rest.map( ele => ele + 1)
    console.log(result)
    console.log(rest)
    const res = rest.filter( ele => ele > 3)
    console.log(res)
    console.log(res.toString().split(','))
}
fun(1,2,3,4,5,6)