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
<<<<<<< HEAD
}
=======
}
>>>>>>> 0f930c852ed04f82f47af2d1e4f0d72846691dd9
