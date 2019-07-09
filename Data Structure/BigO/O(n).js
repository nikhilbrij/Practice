/*======================================*/
const nemo = ["nemo"];

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank"
];

const large = new Array(10000).fill("nemo");

const findNemo = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found nemo!");
      break;
    }
  }
};

findNemo(everyone); // O(n) ==> Linear Time
/*======================================*/

/*======================================*/
const funChallenge = input => {
  let a = 10; // O(1)
  let b = 50 + 3; // O(1)

  for (let index = 0; index < input.length; index++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
};

/* Calculate the BIG O
  
  BIG O(3 + 4n) ==> BIG O(n) 

*/
/*======================================*/

/*======================================*/
const anotherFunChallenge = input => {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)

  for (let index = 0; index < input.length; index++) {
    // O(n)
    let x = index + 1; // O(n)
    let y = index + 2; // O(n)
    let z = index + 3; // O(n)
  }

  for (let j = 0; j < input.length; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }

  let whoAmI = "I don't know"; // O(1)
};

/* Calculate the BIG O
  
  BIG O(4 + 7n) ==> BIG O(n) 

*/
/*======================================*/

/*======================================*/
const printItems = items => {
  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
};

/* Calculate the BIG O
  
  BIG O(1 + n/2 + 100) ==> BIG O(n) 

*/
/*======================================*/

/*======================================*/
const compressBoxesTwice = (boxes, boxes2) => {
  boxes.forEach(boxes => console.log(boxes));

  boxes2.forEach(boxes => console.log(boxes));
};

/* Calculate the BIG O
  
  BIG O(n + m) 

*/
/*======================================*/
