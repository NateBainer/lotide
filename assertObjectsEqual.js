const assertEqual   = require('./assertEqual');

const eqArrays   = require('./eqArrays');

const eqObjects   = require('./eqObjects');

// function starts here
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`😜😜😜 Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`);
  } else {
    console.log(`🥶🥶🥶 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
  }
};

const ab = {
  a: "1",
  b: "2"
};

const ba = {
  b: "2",
  a: "1"
}

const abc = {
  a: "1",
  b: "2",
  c: "3"
}

const cd = {
  c: "1",
  d: ["2", 3]
};

const dc = {
  d: ["2", 3],
  c: "1"
};

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};

assertObjectsEqual(ab,ba);
assertObjectsEqual(cd,dc);
assertObjectsEqual(cd,cd2);
assertObjectsEqual(dc, {d: ["2",3], c: '1'});

module.exports = assertObjectsEqual;
