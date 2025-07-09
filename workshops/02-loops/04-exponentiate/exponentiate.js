// YOUR CODE BELOW
function exponentiate(base, power) {
    if (power > 0) {
        return base ** power;
    } else if (power === 0) {
        return 1;
    } else {
        return "Invalid power or base";
    }
}
