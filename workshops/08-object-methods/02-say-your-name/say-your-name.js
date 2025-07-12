// YOUR CODE BELOW
let me2 = {
  name: 'Tarana',
  getGreeting: function(person) {
    return `Hi ${person.name}, my name is ${this.name}.`;
  }
};

let you = {
  name: 'Alyssa'
};

console.log(me2.name);            // 'Tarana'
console.log(you.name);            // 'Alyssa'
console.log(me2.getGreeting(you)); // 'Hi Alyssa, my name is Tarana.'
