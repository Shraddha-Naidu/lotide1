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

let assertArraysEqual = function(arr1, arr2) {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

//given two arrays, remove second array from first
//can use .includes method
//push remaining elements into a new array

let without = function(origArr, remArr) {
  let newArray = [];

  for (let element of origArr) {
    if (!remArr.includes(element)) {
      newArray.push(element)
    }
  }
  return newArray;
};

//TEST CODE
console.log(without([1, 2, 3], [1])); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
