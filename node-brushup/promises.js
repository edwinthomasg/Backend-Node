// const axios = require('axios')
// let number = 10;

// let promise = new Promise((resolve, reject) => {
//   if (number > 0) {
//     setTimeout(() => resolve(number * 20) , 1000)
//   } else reject("number should be positive");
// })
//   .then((data) => data)
//   .then((data) => data % 10)
//   .then((data) => console.log(`Result : ${data}`))
//   // .catch((err) => console.log(`Error : ${err}`))
//   .finally(() => console.log("finally executed...."))
//   // promise.then(data => data - 10)
// // promise.then(result => console.log("result : ",result))

// function test(){
//     promise.then(msg => console.log("msg : ",msg))
// }

// // test()

// // axios.get("https://jsonplaceholder.typicode.com/posts")
// // .then(res => res.data)
// // .then(res => console.log(res))

// console.log("start")
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000,'promise 1 resolved')
// })

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000,'promise 2 resolved')
// })

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000,'promise 3 resolved')
// })

// Promise.all([promise1,promise2,promise3])
// .then(result => console.log(result))
// .catch(err => console.log(err))
// console.log("end")

// let promise4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000,'promise 4 resolved')
// })

// let promise5 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000,'promise 5 resolved')
// })

// let promise6 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000,'promise 6 resolved')
// })

// Promise.any([promise4,promise5,promise6])
// .then(result => console.log(result))
// .catch(err => console.log(err))

let promise7 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000,'promise 7 resolved')
})

let promise8 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000,'promise 8 rejected')
})

let promise9 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000,'promise 9 resolved')
})

Promise.race([promise7,promise8,promise9])
.then(result => console.log(result))
.catch(err => console.log(err))

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000,'promise 10 resolved')
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000,'promise 11 rejeceted')
})

let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000,'promise 12 resolved')
})

Promise.allSettled([promise1,promise2,promise3])
.then(result => console.log(result))
.catch(err => console.log(err))

/**
 * Promise.all -> array of promises have been given as input and if anyone of it rejects only that error is returned
 * Promise.any -> here single promise is returned when a promise is fulfilled , returnd first promise that fulfills
 * Promise.race -> here it returns the first promise that is fulfilled either rejected or resolved
 * Promise.all vs Promise.allSettled -> dependent , independente on each other promises
 */ 