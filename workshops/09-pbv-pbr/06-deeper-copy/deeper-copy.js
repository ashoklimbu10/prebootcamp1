// YOUR CODE BELOW
function deeperCopy(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        inner.push(arr[i][j]);
      }
      result.push(inner);
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}
