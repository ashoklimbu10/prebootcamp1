// YOUR CODE BELOW
function mySplice(array, startIdx, deleteCount, newValue) {
  let removedElements = [];
  let result = [];

  // Collect elements before startIdx
  for (let i = 0; i < startIdx; i++) {
    result.push(array[i]);
  }

  // Collect deleted elements
  for (let i = startIdx; i < startIdx + deleteCount; i++) {
    removedElements.push(array[i]);
  }

  // Insert newValue if provided
  if (newValue !== undefined) {
    result.push(newValue);
  }

  // Add remaining elements after deletion
  for (let i = startIdx + deleteCount; i < array.length; i++) {
    result.push(array[i]);
  }

  // Clear and refill the original array
  array.length = 0;
  for (let i = 0; i < result.length; i++) {
    array.push(result[i]);
  }

  return removedElements;
}
