const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed 😜😜😜: [actual] === [expected]");
  } else (console.log('Assertion Failed 🥶🥶🥶: [actual] !== [expected]'));
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



//starts here
const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.Keys(obj2).length) {
    return false;
  } else {
    for (let key in obj1) {
      if (Array.isArray(obj1[key])) {
        if (eqArrays(obj1[key], obj2[key]) === false) {
          return false;
        }
      } else if (typeof obj1[key] === 'object') {
        if (eqObjects(obj1[key], obj2[key]) === false) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};

