// demo()

// function demo(){
//     console.log("demo")
// }

// demo()

// const demo = () => {
//     console.log("demo")
// }

// demo()
// const demo = function test(){
//     console.log("test")
// }

// demo()

function demo(mes){
    this.mes = mes
    console.log(this.mes)
    console.log(this)
}

demo('hi')

const newFun = demo('hello')
console.log(newFun)



//normal functions are hoisted and can be called before defining it
//whereas function expressions are not hoisted to the top so you cannot access before defining

