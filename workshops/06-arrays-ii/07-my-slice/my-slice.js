// YOUR CODE BELOW
function mySlice(originalArray,startIdx=0,endIdx=originalArray.length){
    let result=[];
    if(startIdx<0){
    startIdx=originalArray.length +startIdx;
  }
  if(endIdx<0){
    endIdx=originalArray.length+endIdx;
  }
    for(let i=startIdx;i<endIdx;i++){
        let currentNum=originalArray[i];
        result.push(currentNum);
}
  return result;
}
