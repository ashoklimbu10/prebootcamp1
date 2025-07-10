// YOUR CODE BELOW
function mostVowels(s){
    let str=s.split(' ');
    let vowels='aeiouAEIOU';
    let maxVowelCount=0;
    let resultWord='';
for (let i=0;i<str.length;i++){
    let currentWord=str[i];
    let vowelCount=0;
for (let j=0; j<currentWord.length;j++){
    let currentChar=currentWord[j];
    if(vowels.includes(currentChar)){
        vowelCount++;
    }
  }
  if(maxVowelCount<=vowelCount){
    maxVowelCount=vowelCount;
    resultWord=currentWord;
 }
 }
 return resultWord;
}
console.log(mostVowels('i am ashok limbu owl'));