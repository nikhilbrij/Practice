// // const student =  {
// // 	name : 'Nikhil',
// // 	age : 18,
// // 	isActive : true
// // }

// // // convert this object into a string to be stored a localstorage

// // const studentObjToString =JSON.stringify(student);
// // console.log(typeof studentObjToString);
// // localStorage.setItem('student', studentObjToString);

// // stringToObj = JSON.parse(studentObjToString);
// // console.log(typeof stringToObj)
// 'use strict'
// // function checkThis(){
// // 	var fname = 'james';
// // 	var lname = 'bond';
// // 	console.log(this.fname,this.lname);
	
// // }



// // // checkThis()
// // function x(){
// // console.log(this);
// // }
// // x()
'use strict'
var person = {
	name:'james bond',
	age:32,
	city:'london'
}

Object.defineProperty(person,'name',{writable:false})
console.log(Object.getOwnPropertyDescriptor(person,'name'))
person.name = 'Nikhil';