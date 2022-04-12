const assertEqual = require('./assertEqual');


const tail = function(arry) {
  let result = arry.slice(1);
  return result;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); 

module.exports = tail;
