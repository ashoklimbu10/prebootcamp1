// YOUR CODE BELOW
function myLastIndexOf(array,searchValue,startIdx){
    if (!array.includes(searchValue)){
        return -1
    }
    if (startIdx === undefined || startIdx >= array.length) {
    startIdx = array.length - 1;
  }
  for (let i=startIdx; i >= 0; i--) {
    if (array[i] === searchValue) {
      return i;
    }
  }
return -1;
}
