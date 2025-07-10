// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
  let front = originalArray.slice(-rotateNum);
  let end = originalArray.slice(0, -rotateNum);

  return front.concat(end);
}
console.log(rotateArray([1, 2, 3, 4, 5], 3));