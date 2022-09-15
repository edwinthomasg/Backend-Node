const json = {
    name : "edwin",
    age : 21
}
console.log(JSON.parse(JSON.stringify(json), (key, value) => {
    if(typeof value === "string")
        return value.toUpperCase()
    return value
}))

