const assertEqual = require('./assertEqual');

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 2);

function head(myArray) {
  return myArray[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

