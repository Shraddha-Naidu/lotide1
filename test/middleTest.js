const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it('returns [6, 8] for [2, 4, 6, 8, 10, 12]', () => {
    assert.deepEqual(middle([2, 4, 6, 8, 10, 12]), [6, 8]);
  });

  it('returns [7] for [9, 8, 7, 7, 5]', () => {
    assert.deepEqual(middle([9, 8, 7, 7, 5]), [7]);
  });
  
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle(["john", "bob"]), []);
  });
});
