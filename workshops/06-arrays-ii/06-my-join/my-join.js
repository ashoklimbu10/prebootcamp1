// YOUR CODE BELOW
function myJoin(array, separator=",") {
  let result = ''
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if(array[i]===undefined || array[i]===null){
        value='';
    }
    if(i===0){
        result+=value;
    }
    else{
        result+=separator+value; 
     }
}
return result;
}