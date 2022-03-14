//FUNCTION IMPLEMENTATION
let eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
    for(let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
      }
  }
  return true;
};

let assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

//Function will take in an array and a callback
//array will be pushed through callback and into a new array, so not to change OG array

let map = function(array, callback) {
  let results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST CODE
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);
