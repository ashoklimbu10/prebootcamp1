let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
function leetTranslator(str) {
  let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
  let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#', 'l', '_|', '|<', '1',
                   "|'|'|", '/\\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/',
                   '|/|/', '><', 'j', '2'];

  let leetCodex = {};

  // Fill in the codex
  for (let i = 0; i < letters.length; i++) {
    leetCodex[letters[i]] = leetChars[i];
  }

  // Convert input string to lowercase
  let lowerStr = str.toLowerCase();
  let result = '';

  for (let i = 0; i < lowerStr.length; i++) {
    let char = lowerStr[i];
    if (leetCodex[char]) {
      result += leetCodex[char];
    } else {
      result += char; // keep non-letter characters as-is
    }
  }

  return result;
}
