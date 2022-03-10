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

let letterPositions = function(string) {
  let results = {};

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if(results[string[i]]) {
        results[string[i]].push(i);
      } else {
        results[string[i]] = [i];
      }
    }
  }
  console.log(results);
  return results;
};

//TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("shraz").r, [2]);