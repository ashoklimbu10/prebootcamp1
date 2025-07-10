<<<<<<< HEAD
=======
// YOUR CODE BELOW
>>>>>>> 0f930c852ed04f82f47af2d1e4f0d72846691dd9
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
<<<<<<< HEAD

console.log(zooInventory([
  ['King Kong', ['gorilla', 42]],
  ['Nemo', ['fish', 5]],
  ['Punxsutawney Phil', ['groundhog', 11]]
]));
=======
>>>>>>> 0f930c852ed04f82f47af2d1e4f0d72846691dd9
