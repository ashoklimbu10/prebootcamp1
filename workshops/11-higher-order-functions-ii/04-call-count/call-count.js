// YOUR CODE BELOW
function callCount(){
    let count=0;
    function newFunction(){
        count++;
        return count;
    }
    return newFunction;
}
let newFunction1 = callCount();
let newFunction2 = callCount();

console.log(newFunction1()); // => 1
console.log(newFunction1()); // => 2

newFunction2(); // => 1
newFunction2(); // => 2
