// YOUR CODE BELOW
debugger;
function onlyOne(a, b, c) {
  if (a && !b && !c) return true;
  if (!a && b && !c) return true;
  if (!a && !b && c) return true;
  else 
  return false;
}