// YOUR CODE BELOW
function myIndexOf(source , searchValue,startIdx=0 ){
for (i=startIdx;i<source.length;i++){
    let current=source.slice(i,i+searchValue.length)
    if(current===searchValue){
        return i;
    }
}
return -1; 
}