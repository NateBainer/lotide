const assertEqual = require("./assertEqual");







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

module.exports = countLetters