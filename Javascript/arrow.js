// let sayHello = function (name) {
//   return "hello ," + name + "!"
// }
// console.log(sayHello("Nikhil"));

// let sayHello = (name) => {
//   return `hello ${name} !`
// }
// console.log(sayHello("Nikhil"));
//
//
// let sayHello = (name) => `hello ${name} !`;
//
// console.log(sayHello("Nikhil"));



const todos = [
{
  title : "Buy Book",
  isDone : false
} ,
{
  title : "Go to College",
  isDone : false
} ,
{
  title : "Learn Code",
  isDone : true
}]


const thingsDone = todos. filter((todo) => todo.isDone === false);

console.log(thingsDone);
