const boxes = [1, 2, 3, 4];

const logFirstTwoBoxes = boxes => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
};

logFirstTwoBoxes(boxes); // O(1) ==> Constant Time
