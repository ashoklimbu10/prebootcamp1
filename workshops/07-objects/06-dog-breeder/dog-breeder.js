// YOUR CODE BELOW
function dogBreeder(name = 'Steve', age = 0) {
  if (typeof name === 'number') {
    return { name: 'Steve', age: name };
  }

  return { name: name, age: age };
}