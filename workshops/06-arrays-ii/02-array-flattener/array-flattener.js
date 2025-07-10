// YOUR CODE BELOW
function arrayFlattener(arr){
    let result=[];
    for (let i=0;i<arr.length;i++){
        let current= arr[i];
        if(Array.isArray(current)){
            for (j=0;j<current.length;j++){
                result.push(current[j]);
            }
        }
         else {
                result.push(current);
            }
    }
    return result;
}
