const head = function(array) {
  if (array.length > 0) {
    return array[0];
  }
  if (array.length === 0) {
    return "undefined";
  }
  return head;
};


module.exports = head;
