// YOUR CODE BELOW
function taxCalculator(amount,state){
if (state==="NY"){
    return amount*1.04;
}
else if(state==="NJ"){
    return amount*1.06625;
}
else {
    return amount;
}
}