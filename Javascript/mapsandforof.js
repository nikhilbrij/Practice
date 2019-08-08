let john = {
  name : "I am a john",
  age : 25,
  isActive : true
}

let marry = {
  name : "I am a marry",
  age : 24,
  isActive : true
}

let sam = {
  name : "I am a sam",
  age : 29,
  isActive : false
}

let users = new Map()
//
users.set("john", john);
users.set("marry", marry);
users.set("sam", sam)

console.log(users);

console.log(users.size);
console.log(users.get('sam'));

console.log(users.keys());
console.log(users.values());

for (const key of users.keys()) {
  console.log(key);
}

for (const value of users.values()) {
  console.log(value);
}
//Method 1
for (const [key , value] of users.entries()) {
  console.log(key + " = " + value.name);
}

//Method 2
users.forEach((value , key) => console.log(key + " = " + value.name))

var arrOfArr = [['one' , '1'] , ['two' , '2'] , ['three' , '3']]

const newMAp = new Map(arrOfArr)
console.log(newMAp);
