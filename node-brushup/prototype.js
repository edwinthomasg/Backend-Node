// const user = {
//   name: "joey",
//   tvShow: "friends",
//   display() {
//     console.log(`This is ${this.name} from the tv show ${this.tvShow}`);
//   },
// };
// user.display();
// console.log(user.toLocaleString());

//shadow
const date = new Date();

date.getDate = () => {
  console.log("not a inbuilt method");
};
date.getDate(); //getDate will be found in its own prototype itself that is in date object itself

//create
let employee = {
  name: "xyz",
  age: 21,
};
let cp = {};
Object.assign(cp, employee);
cp.location = "chennai";
console.log(employee);
console.log(cp);

function CreateObject(name,age){
    this.name = name,
    this.age = age
}
let ob1 = new CreateObject('edwin',21)
let ob2 = new CreateObject('akash',22)

CreateObject.prototype.location = 'erode'
console.log(ob1)
console.log(ob2.location)

/*
each and every object has prototype object that implements Object.prototype , if attempt to use the property it will start from the own prototype property if not exist it will check on nxt chain and till it reaches the end after that it returns null
*/
