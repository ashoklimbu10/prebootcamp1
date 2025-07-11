// YOUR CODE BELOW
function chainReaction(startVal, funcArray) {
  let result = startVal;
  for (let i = 0; i < funcArray.length; i++) {
    result = funcArray[i](result);
  }
  return result;
}
function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

chainReaction(0, [addTen, subtractFive, multiplyFive]); // => 25
chainReaction(0, [subtractFive, multiplyFive, addTen]); 