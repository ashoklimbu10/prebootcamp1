// YOUR CODE BELOW
function getDogBreeder(defaultName = 'Steve', defaultAge = 0) {
  function dogBreeder(name = defaultName, age = defaultAge) {
    return {
      name: name,
      age: age
    };
  }
  return dogBreeder;
}
let puppyFarm = getDogBreeder('Snoopy', 0);
let rescueShelter = getDogBreeder('Odie', 3);

puppyFarm('Olaf', 3); // => {name: 'Olaf', age: 3};
puppyFarm(2); // => {name: 'Snoopy', age: 2}

console.log(rescueShelter()); // => {'Odie', 3}