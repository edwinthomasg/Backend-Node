const string = '{"one": 1, "two": 2, "three": {"four": 4, "five": {"six": 6}}}'
let res = []
let val = []
JSON.parse(string, (key, value) => {
    console.log('key : ',key)
    res.push(key)
    console.log('value : ',value)
    val.push(value)
})
console.log(res) //last property or key will be ""
console.log(val)
console.log(JSON.parse(string))

let arr = '[1,2,3,4]' //valid
let arr2 = '[1,2,3,]' //it doesnt support trailing commas and also the single quotes for key value

try{
    console.log(JSON.parse(arr2))
}
catch(err){
    console.log(`error : ${err}`)
}

//When the JSON is nested, reviver begins with the most inner properties.