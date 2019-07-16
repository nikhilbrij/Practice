// Give 2 arrays, create a function that let's user know (true/false) that these two arrays contain common item or not

//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//Should return false.
//--------------------------------------
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'x'];
//Should return true.

//Bad Approach
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "c"];

const containCommonItem = (array1, array2) => {
  for (itemsOfArr1 of array1)
    for (itemsOfArr2 of array2) {
      if (itemsOfArr1 === itemsOfArr2) return true;
    }
  return false;
};

//O(a*b)
// console.log(containCommonItem(array1, array2));

//Good approach
const containCommonItem2 = (array1, array2) => {
  let map = {};

  for (itemsOfArr1 of array1) {
    if (!map[array1]) {
      map[itemsOfArr1] = true;
    }
  }

  for (itemsOfArr2 of array2) {
    if (map[itemsOfArr2]) {
      return true;
    }
  }
  return false;
};

//O(a+b)
console.log(containCommonItem2(array1, array2));
