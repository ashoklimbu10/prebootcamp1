// YOUR CODE BELOW
function zooInventory(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let name = arr[i][0];
    let species = arr[i][1][0];
    let age = arr[i][1][1];

    let sentence = `${name} the ${species} is ${age}.`;
    result.push(sentence);
  }

  return result;
}
