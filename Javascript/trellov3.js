// let myTodos = ["Buy Book" , "Go to College" , "Learn Code"]

const newTodos = [
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


// const index = newTodos.findIndex(function(todo , index){
//   return todo.title === "Go to College"
// })
//
// console.log(index);

// Method 1
// const findTodo = function (myTodos , title){
//   const index = myTodos.findIndex(function (todo , index){
//     // console.log(todo);
//     // console.log(index);
//     // console.log(title);
//     return todo.title.toLowerCase() === title.toLowerCase()
//   })
//   return myTodos[index]
// }
//
// let printMe = findTodo(newTodos , "Go to college")
// console.log(printMe);

// Method 2
const findTodo = function(myTodos , title){
  const titleReturned = myTodos.find(function (todo ,index) {
    return todo.title.toLowerCase() === title.toLowerCase();
  })
  return titleReturned
}

let printMe = findTodo(newTodos , "Go to college")
 console.log(printMe);
