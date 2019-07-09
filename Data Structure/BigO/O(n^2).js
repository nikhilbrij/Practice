/*======================================*/
const boxes = ["a", "b", "c", "d"];

const logPairsOfArray = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

logPairsOfArray(boxes);

/* Calculate the BIG O
  
  BIG O(n^2) ==> beacuse of Nested Loop  

*/
/*======================================*/

/*======================================*/
const pairAllNumbersAndSums = numbers => {
  console.log("these are the numbers");

  numbers.forEach(number => console.log(number));

  console.log("These are the Sums");

  numbers.forEach(firstNumber => {
    numbers.forEach(secondNumber => console.log(firstNumber + secondNumber));
  });
};

pairAllNumbersAndSums([1, 2, 3, 4, 5]);

/* Calculate the BIG O
  
  BIG O(n + n^2) => BIG O(n^2)

*/
/*======================================*/
