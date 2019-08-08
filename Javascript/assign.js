let  todos = [{
  title : "Buy Book",
  isDone : true
} , {
  title : "Go to Gym",
  isDone : false
} ,{
  title : "Go to College",
  isDone :false
} ,{
  title : "coding",
  isDone : true
}, {
  title : "Study",
  isDone : true
} ,{
  title : "Buy milk",
  isDone : false
}]

let notDone = todos.filter((todo) => todo.isDone === false)

  for(i=0 ; i <notDone.length ; i++)
  {
  console.log(notDone[i].title);
  }
