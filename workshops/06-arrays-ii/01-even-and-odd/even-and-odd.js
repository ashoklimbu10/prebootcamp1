// YOUR CODE BELOW
function evenOdd(arr){
    let oddNum=[];
    let evenNum=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            evenNum.push(arr[i]);
        }
        else{
            oddNum.push(arr[i]);
        }
    
    return {
    even: evenNum,
    odd: oddNum
  };
}
<<<<<<< HEAD
console.log(evenOdd([1,2,3,4,5,6,7]));
=======
>>>>>>> 0f930c852ed04f82f47af2d1e4f0d72846691dd9
