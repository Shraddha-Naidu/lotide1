//FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Array length should be greater than 0
//if array.length is 0, return undefined
//if array.length is greater than 0, return first elemenr(a.k.a head)

const head = function(array) {
  if (array.length > 0) {
    return array[0];
  }
  if (array.length === 0) {
    return "undefined";
  }
  return head;
};


//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");