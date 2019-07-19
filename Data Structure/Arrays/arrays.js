// const strings = ["a", "b", "c", "d"];

// strings[2]; // O(1)

// //push
// strings.push("e"); // O(1)

// //pop
// strings.pop(); // O(1)

// //unshift
// strings.unshift("x"); // O(n)

// //splice
// strings.splice(2, 0, "g"); // O(n/2) ==> O(n             )

// console.log(strings);

/*=======================*/

//Array Implementation
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    const item = this.data[index];
    return item;
  }

  push(item) {
    this.data[this.length] = item;
    return this.length++;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
      delete this.data[this.length - 1];
      this.length--;
    }
  }
}

const newArray = new MyArray();
newArray.push("Nikhil");
newArray.push("Brijpuriya");
newArray.push("hi");
newArray.push("naman");
newArray.delete(2);
newArray.pop();
console.log(newArray.get(1));

console.log(newArray);
