// 2 Params = Arrays (Sorted)

//Example :-
// arr1 = [0, 2, 4, 6];
// arr2 = [2, 14, 56];
//answer => [0, 2, 2, 4, 14, 56)

// //Merge => Sorted Array Solution 1
// arr1 = [0, 2, 4, 6];
// arr2 = [2, 14, 56];

// const compareNumbers = (a, b) => a - b;

// const mergeSortArrays = (arr1, arr2) => {
//   let mergedArray = arr1;

//   for (arr2Items of arr2) {
//     mergedArray.push(arr2Items);
//   }

//   return mergedArray.sort(compareNumbers);
// };

// console.log(mergeSortArrays(arr1, arr2));

/*================================*/

//Merge => Sorted Array Solution 2
arr1 = [0, 3, 4, 31];
arr2 = [4, 6, 30];

const mergeSortArrays = (arr1, arr2) => {
  const mergedArray = [];
  arr1Item = arr1[0];
  arr2Item = arr1[1];

  let i = 1;
  let j = 1;

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item);
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
};

console.log(mergeSortArrays(arr1, arr2));
