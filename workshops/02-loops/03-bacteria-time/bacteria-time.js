// YOUR CODE BELOW
function bacteriaTime(currentNum,targetNum){
    let time=0;
for(i=targetNum;i>currentNum;i=i*(1/2)){
    time+=20; 
}
return time;
}