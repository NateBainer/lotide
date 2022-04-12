const assertEqual = require("./assertEqual");


//STARTS HERE
const findKeyByValue = function(obj, val) {
  let findKey = Object.keys(obj);
  let whereKey = 0;
  for (let element in obj) {
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
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy");

module.exports = findKeyByValue;
