// YOUR CODE BELOW
function removeColumns(originalGrid, numColumns) {
  let result = [];
  for (let i = 0; i < originalGrid.length; i++) {
    let row = originalGrid[i];
    let newRow = [];

    for (let j = 0; j < row.length - numColumns; j++) {
      newRow.push(row[j]);
    }

    result.push(newRow);
  }

  return result;
}
