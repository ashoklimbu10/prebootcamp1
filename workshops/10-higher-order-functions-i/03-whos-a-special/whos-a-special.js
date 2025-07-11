// YOUR CODE BELOW
function whosASpecial(array) {
  let result=''
  for (let i = 0; i < array.length; i++) {
    
    result+=`${array[i].name} the ${array[i].species} is very special!`;
  }
  return result.trim();
}

let specialPets = [
  {
    name: "Sadie",
    species: "cat",
  },
  {
    name: "Layla",
    species: "cat",
  },
  {
    name: "Bogie",
    species: "dog",
  },
];


console.log(whosASpecial(specialPets));
