// YOUR CODE BELOW
function zeroDarkThirty(num) {
  if (num === 0) {
    return NaN;
  }

  let str = String(num);
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '0') {
      result += str[i];
    }
  }
  return Number(result);
}