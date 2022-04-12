const assertArraysEqual = require("./assertArraysEqual");

const eqArrays = require("./eqArrays");



//STARTS HERE
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("hello"));

module.exports = letterPositions;
