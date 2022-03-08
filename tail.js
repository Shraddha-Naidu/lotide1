//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function should return all ellements except for element[0] (.slice(1))

const tail = function(array) {
  return array.slice(1);
};


//If testing this code, the new array would have to be split and each element checked individually to ensure that assertEqual can check it.
