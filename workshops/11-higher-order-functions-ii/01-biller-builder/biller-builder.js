// YOUR CODE BELOW
function billerBuilder(arr){
function biller(num){
    if (arr=='NY'){
        return  num* 1.03 * 1.04;
    }
    else if (arr=='NJ'){
        return num*1.05*1.06625;
    }
}
    return biller;
}
let newYorkBiller = biller('NY');
newYorkBiller(100) // => 107.12 (100 * 1.03 * 1.04)

let newJersBiller = biller('NJ');
newJersBiller(100) // => 111.95625 (100 * 1.05 * 1.06625)
 