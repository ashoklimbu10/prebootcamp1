// YOUR CODE BELOW
function onlyOdds(n){
    let sum=0;
    for(let i=n;i>=1;i--){
        if(i%2==1){
           sum+=i;
        }
    }
    return sum;
}
