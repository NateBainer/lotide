const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed 😜😜😜: [actual] === [expected]");
  } else (console.log('Assertion Failed 🥶🥶🥶: [actual] !== [expected]'));
};

const countLetters = function(string) {
  const results = {};

  for (let letters of string) {
    
    if (letters !== " ") {
      if (results[letters]) {
        results[letters += 1];
      } else {
        results[letters] = 1;
      }
    }

    return results;
  }
};

console.log(countLetters("lighthouse in the house"));