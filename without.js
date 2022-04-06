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