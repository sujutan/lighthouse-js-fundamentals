/**
 * Define a function called merge
 * The function should, when given two sorted arrays containing numbers,
 * returns a sorted array of the numbers from both lists.
 */
const merge = function (arr1, arr2) {
  let result = [];
  // i is arr1 index, j is arr2 index.
  let i = 0,
    j = 0;
  //compare arr1[i] with arr2[j], push the smaller number to result, till arr1 or arr2 has no more number
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  // push the remaining numbers of arr1 to result
  if (i < arr1.length) {
    for (let m = i; m < arr1.length; m++) {
      result.push(arr1[m]);
    }
  }
  // push the remaining numbers of arr2 to result
  if (j < arr2.length) {
    for (let n = j; n < arr2.length; n++) {
      result.push(arr2[n]);
    }
  }
  return result;
};

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
