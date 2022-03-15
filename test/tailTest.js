const assert = require('../chai').assert;
const tail = require('../tail')

describe("#tail", () => {

  it('returns ["Bird", "Smart", "Tatum"] for ["Garnett", "Bird", "Smart", "Tatum"]', () =>{
  assert.deepEqual(tail(["Garnett", "Bird", "Smart", "Tatum"]), ["Bird", "Smart", "Tatum"])
  });

  it('returns [33, 36, 0] for [5, 33, 36, 0]', () =>{
    assert.deepEqual(tail([5, 33, 36, 0]), [33, 36, 0])
    });

});
