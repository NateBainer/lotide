const assertEqual = function(array1, array2) {
  if (array1 === array2) {
    array2;
    console.log("Assertion Passed 😜😜😜: [array1] === [array2]");
  } else (console.log('Assertion Failed 🥶🥶🥶: [array1] !== [array2]'));
};


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length)
    return false;
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i])
      return false;
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed 😜😜😜: ${array1} === ${array2}`);
  } else {
    console.log(`Assertion Failed 🥶🥶🥶: ${array1} !== ${array2}`);
  }
};

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