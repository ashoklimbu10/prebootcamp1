// YOUR CODE BELOW
function stringify(callback) {
  function newFunction() {
    let result = callback();
    return String(result);
  }
  return newFunction;
}

