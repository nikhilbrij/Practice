class User {
	constructor(fname , lname , age){
		this.fname = fname;
		this.lname = lname;
		this.age = age;
	}

  fullName(){
  	return  this.fname + " " +  this.lname + " "+  `teaches ${this.subject}`;
  }

  editName(newname){
  	const myName = newname.split( " ");
  	this.fname = myName[0];
  	this.lname = myName[1]
  }
}

class Teacher extends User{
	constructor(fname , lname , age , subject)
	{  super(fname , lname , age)
		this.subject = subject;

	}
}


const john = new Teacher('john' , 'doe' , 32  ,"python");
// console.log(john.fullName());
john.editName("johnny doe");
console.log(john.fullName());