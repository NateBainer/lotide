const assertEqual = require('./assertEqual');


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

module.exports = tail;
