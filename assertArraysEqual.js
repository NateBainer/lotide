const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");



const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed πππ: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed π₯Άπ₯Άπ₯Ά: ${array1} !== ${array2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);

module.exports = assertArraysEqual;
