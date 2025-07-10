// YOUR CODE BELOW
function frequencyAnalysis(str) {
  let counts = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (counts[char] ) {
      counts[char] += 1;
    } else {
      counts[char] = 1;
    }
  }

  return counts;
}
