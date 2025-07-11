// YOUR CODE BELOW
function cloneMachine(obj) {
  let cloneName = obj.name + "Clone";
  let cloneObj = {
    name: cloneName,
    species: obj.species,
    offspring: [],
  };
  obj.offspring.push(cloneName);

  return cloneObj;
}
let dollyClone = cloneMachine(dolly);
console.log(dollyClone) // {name: 'DollyClone', species: 'sheep', offspring: []}
console.log(dolly) // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}