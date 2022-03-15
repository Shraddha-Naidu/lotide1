//FUNCTION IMPLEMENTATION
const assertEqual = require('../assertEqual')

//function should return all ellements except for element[0] (.slice(1))

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};


module.exports = tail;
