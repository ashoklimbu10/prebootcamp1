// YOUR CODE BELOW
function reverseArray(arr) {
  let result = [];
  let tempArr = [...arr]; // clone the array to preserve the original

  while (tempArr.length > 0) {
    let element = tempArr.shift();   // remove first element
    result.unshift(element);         // add it to the beginning of result
  }

  return result;
}

let myArray = [1, 2, 3, 4];
myArray = reverseArray(myArray);  // store the returned reversed array

console.log(myArray); // ✅ [4, 3, 2, 1]
