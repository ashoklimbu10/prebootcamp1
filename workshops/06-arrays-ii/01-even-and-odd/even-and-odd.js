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
