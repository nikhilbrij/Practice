////Reverse String Solution 1
const reverseString = str => {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Please Provide An String";
  }
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse = reverse + str[i];
  }
  return reverse;
};

// //Reverse String Solution 2
// const reverseString = str => {
//   let backWord = [];

//   for (let i = str.length - 1; i >= 0; i--) {
//     backWord.push(str[i]);
//   }
//   return backWord.join("");
// };

// //ES6 Method => Reverse String
// const reverseString = str =>
//   str
//     .split("")
//     .reverse()
//     .join("");

console.log(reverseString(null));
