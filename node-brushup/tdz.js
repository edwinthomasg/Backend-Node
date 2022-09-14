function eval(){
    var num = 10
    console.log("outer start : ",num)
    if(num)
    {
        console.log("num value : ",num)
        let res = num + 20
        console.log("inner : ",res)
    }
    console.log("outer : ",num)
}

// eval()
console.log("result : ",require.main === module)
console.log(module)
// let a = [1,2,3,4,5]
// let b = a
// b.push(6)
// console.log(a) deep copy
let ob = {
    user : 'edwin'
}
let cpy = {...ob}
cpy.age = 21
console.log(ob)
module.exports.a = 10
exports.a = 20

