// YOUR CODE BELOW
function partial(callback, arg) {
  return function (newArg) {
    return callback(arg, newArg);
  };
}
function summer(a, b) {
  return a + b;
}

let sumFive = partial(summer, 5);
sumFive(10); // => 15;
