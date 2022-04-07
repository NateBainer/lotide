const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed 😜😜😜: [actual] === [expected]");
  } else (console.log('Assertion Failed 🥶🥶🥶: [actual] !== [expected]'));
};


//STARTS HERE
const countLetters = function(string) {
  const results = {};
  //const stringArr = string.split("");
  //console.log(stringArr)
  for (let char of string) {
    //console.log(char)
    if (char !== " ") {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }

    
  } return results;
};

console.log(countLetters("hello"));
// h : 1, e : 1, l : 2, o : 1 