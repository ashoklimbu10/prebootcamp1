// YOUR CODE BELOW
function oddCouple(arr){
    let result=[];
for (let i=0;i<arr.length;i++){
    if(arr[i]%2===1){
        result.push(arr[i]);
    }
    if (result.length===2){
        break;
    }
}
return result;
}