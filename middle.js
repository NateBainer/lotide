const assertEqual = require("./assertEqual");

const eqArrays = require("./eqArrays");

const assertArraysEqual = require("./assertArraysEqual");





const middle = function(arr) {
  let middleElement = [];
  if (arr.length <= 2) {
    return middleElement;
  } else if (arr.length % 2 === 0) {
    //return middleElement = [arr[(middleElement.length / 2) - 1], arr[middleElement.length / 2]];
    let midIdx = arr.length / 2;
    let befMidIdx = midIdx - 1;
    return [arr[befMidIdx], arr[midIdx]];
  } else {
    let midIdx = Math.floor(arr.length / 2);
    return [arr[midIdx]];
    //return middleElement = arr[(middleElement.length / -1) / 2];
  }
  //return middleElement;
};

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));

module.exports = middle;
