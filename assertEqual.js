const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed πππ: [actual] === [expected]");
  } else (console.log('Assertion Failed π₯Άπ₯Άπ₯Ά: [actual] !== [expected]'));
};

module.exports = assertEqual;
