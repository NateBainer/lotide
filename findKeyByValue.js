const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed 😜😜😜: [actual] === [expected]");
  } else (console.log('Assertion Failed 🥶🥶🥶: [actual] !== [expected]'));
};


//STARTS HERE
const findKeyByValue = function(obj, val) {
  let findKey = Object.keys(obj);
  let whereKey = 0;
  for (let element of obj) {
    if (obj[element] === val) {
      return findKey[whereKey];
    }
    whereKey++;
  }
  
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);