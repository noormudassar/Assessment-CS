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

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function hasUniqueChars(word) {
  const uniquesChars = [];
  for (let i = 0; i < word.length; i++) {
    if (word.includes(word[i], i + 1) === true) {
      return "false";
    }
  }
  return "true";
}

console.log("hasUniqueChars");
console.log(hasUniqueChars("Monday")); // -> True
console.log(hasUniqueChars("Moonday")); // -> False

// Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog Write a function to check a sentence to see if it is a pangram or not.

// Time Complexity: O(n)
// Space Complexity: O(n)

function isPangram(input) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerCase = input.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    if (!lowerCase.includes(letter)) {
      return `false`;
    }
  }
  return `true`;
}

console.log("isPangram");
console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // -> True
console.log(isPangram("I like cats, but not mice")); // -> False

//  Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

// Time Complexity: O(n)
// Space Complexity: O(1)

function findLongestWord(words) {
  let longestWord = "";

  words.forEach((elem) => {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  });

  return longestWord.length;
}

console.log("findLongestWord");
console.log(findLongestWord(["hi", "hello"])); // -> 5
