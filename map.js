// const assertArraysEqual = require("./assertArraysEqual");


// const eqArrays = require("./eqArrays");



const words = ["ground", "control", "to", "major", "tom"];

 
const map = function(arr, callback) {
  const results = [];
  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

console.log(map.words)




