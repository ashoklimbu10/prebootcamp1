// YOUR CODE BELOW
function compareObjects(obj1, obj2){
    let keys1=Object.keys(obj1);
    let keys2=Object.keys(obj2);
    if(keys1.length!==keys2.length){
        return false;
    }
 for (let key in obj1){
    if(obj1[key]===obj2[key]){
        return true;
    }
    else {
        return false;
    }
 }
}