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
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([3, 2, 1], [1, 2, 3]));
console.log(eqArrays(['1', '2', '3'], ['1', '2', 3]));
console.log(eqArrays(['1', '2', '3'], ['1', '2', '3']));
console.log("Yo wassup");