/* Define a function called concat
The function should, when given two arrays, concatenate the arrays together.
 */

const concat = function (array1, array2) {
  for (let item of array2) {
    array1.push(item);
  }
  return array1;
};

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);
