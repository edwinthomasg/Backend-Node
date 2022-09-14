// -function(){
//     return 4
// }();

function fun1() {
  let name = "edwin";
  console.log("parent : ", name);
  function fun2() {
    console.log("child : ", name);
  }
}

// const resFun = fun1()
// console.log("closure : ",resFun())

for (var i = 0; i < 5; i++) {
  (function (count) {
    setTimeout(function () {
      console.log("reached count : ", count);
    }, 1000);
  })(i);
  console.log(" i : ", i);
}
