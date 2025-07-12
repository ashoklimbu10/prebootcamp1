// YOUR CODE BELOW
function callThemAll(obj, num) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === 'function') {
      result.push(obj[key](num));
    }
  }
  return result;
}

let addsNums = {
  addTen: function(num) {
    return num + 10;
  },

  addTwenty: function(num) {
    return num + 20;
  },

  someProperty: 'value'
};

console.log(callThemAll(addsNums, 100)); // ➤ [110, 120]
