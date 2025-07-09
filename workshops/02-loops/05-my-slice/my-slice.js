// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {
    let result = '';
    if (startIdx === undefined) {
        startIdx = 0;
    }
    if (endIdx === undefined) {
        endIdx = originalString.length;
    }
    for (let i = startIdx; i < endIdx; i++) {
        result += originalString[i];
    }

    return result;
}
console.log(mySlice('ashok',1,3));