// YOUR CODE BELOW

function functionLogger(func, arg) {
  console.log("Function starting");
  const result = func(arg);
  console.log("Function complete");
  return result;
}
function squareNum(x) {
  return x * x;
}

let squareOfFour = functionLogger(squareNum, 4);
// Function starting
// Function complete

console.log(squareOfFour)    // 16