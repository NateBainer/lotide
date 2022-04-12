const assertEqual   = require('./assertEqual');


const eqArrays   = require('./eqArrays');



//starts here
const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));

module.exports = eqObjects;
