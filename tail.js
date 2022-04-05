const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed😜😜😜: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed🥶🥶🥶: ${actual} !== ${expected}`);
  }

};

const tail = function(arry) {
  let result = arry.slice(1);
  return result;
};

const words = [1,2,3];
tail(words);
assertEqual(words.length, 7);

const newWords = [1,2,3,4,5];
tail(newWords);
assertEqual(newWords.length, 5);