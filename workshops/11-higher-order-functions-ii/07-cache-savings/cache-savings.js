// YOUR CODE BELOW
function cacheSaving(callback) {
  let cache = {};
  function newFunction(arg1) {
    if (cache.hasOwnProperty(arg1)) {
      return cache[arg1];
    }
    let result = callback(arg1);
    cache[arg1] = result;

    return result;
  }
  return newFunction;
}
