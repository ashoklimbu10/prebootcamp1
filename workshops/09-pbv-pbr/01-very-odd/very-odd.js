// YOUR CODE BELOW
function veryOdd(arr){
let result=[];
for (let i=0;i<arr.length;i++){
    if(arr[i]%2==1){
        result.push(arr[i]);
    }
}
return result;
}
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log('oddNums:', oddNums); // [1, 3, 5, 7];
console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]