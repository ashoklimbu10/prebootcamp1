let word = 'pacific';
// let word = 'pacific';
// let word = 'perfecto';
// let word = 'perfect';
let lastWord;
// YOUR CODE BELOW
if (word.length === 7 && word[0] === 'p') {
    lastWord = word.toUpperCase();
    console.log(lastWord);
} else {
    console.log(word);
}