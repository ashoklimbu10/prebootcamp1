// YOUR CODE BELOW
function makeGrid(rows, columns) {
    let result = [];
    for (let i = 0; i <columns ; i++) {
        let row = [];
        for (let j = 1; j <=rows; j++) {
            row.push(j);
        }
        result.push(row);
    }

    return result;
}
