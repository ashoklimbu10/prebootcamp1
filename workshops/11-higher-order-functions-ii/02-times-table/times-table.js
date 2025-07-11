// YOUR CODE BELOW
function timesTable(num1){
    function product(num2){
        return num1 * num2
    }
    return product;
}
let ninesTable = timesTable(9);
ninesTable(8)    // => 72

let twelvesTable = timesTable(12);
twelvesTable(100) 
