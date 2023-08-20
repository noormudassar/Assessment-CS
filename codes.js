// Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// Time Complexity: O(n*logn)
// Space Complexity: O(1)

function addToZero(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        return `true`;
      }
    }
  }
  return `false`;
}

// Test cases
console.log(addToZero([])); // -> False

console.log(addToZero([1])); // -> False

console.log(addToZero([1, 2, 3])); // -> False

console.log(addToZero([1, 2, 3, -2])); // -> True

// Unique Characters
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
