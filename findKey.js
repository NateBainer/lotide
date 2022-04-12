
   
const findKey = function(obj, cB) {
  for (let key in obj) {
    if (cB(obj[key])) 
      return key;
  }
};

module.exports = findKey;
