//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters(string) {
  const result = {};
    for (let letter of string) {
    if (letter !== " ") { 
      if (result[letter]) { 
        result[letter] += 1;
      } else { 
        result[letter] = 1;
      }
    }
  }
  return result;
};


//TEST CODE
console.log(countLetters('LHL'))
console.log(countLetters('L H L'))
console.log(countLetters('DEETS'))
console.log(countLetters('B E E T'))