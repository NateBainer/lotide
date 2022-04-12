const takeUntil = require("./takeUntil");

const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");



const assertArraysEqual = require("./assertArraysEqual");


const without = function(array1, array2) {

  let arr = [];

  if (eqArrays(array1, array2)) return arr;
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      arr.push(array1[i]);
    }
  }
  return arr;
};

console.log(without([1, 2, 3], [1, 2, 3]));

module.exports = takeUntil;
