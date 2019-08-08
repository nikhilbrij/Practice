// let user = {
//   name: "nikhil",
//   age: 19,
//   greetMsg: function() {
//     console.log(`Good Morning ${this.name}`);
//   }
// };

// user.greetMsg(); // O(1)
// console.log(user.name); // O(1)
// console.log(user.age); // O(1)

class HashTable {
  constructor(size) {
    this.data = new Array(size);
    this.length = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let item = [];
    item[this.length] = item[key];
    console.log(item);
    this.length++;
    item[this.length] = item[value];
    console.log(item);
    // this.data.push(item);
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
// myHashTable.get("grapes");
myHashTable.set("apples", 9);
// myHashTable.get("apples");

console.log(myHashTable);
