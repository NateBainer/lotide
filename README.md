# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @natebain/lotide`

**Require it:**

`const _ = require('@natebain/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`: This function will take in two arrays and console.log an appropriate message to the console.

* `function2(assertEqual)`: This function will assess two datasets and determine whether or not they are identical. It will console.log the results.

* `function3(assertObjectsEqual)`: Assesses two objects and determines if they have identical key:value pairs using the eqObjects function. It will console.log the results.

* `function4(countLetters)`: Returns the amount of times that a letter appears in a string (ex. LHL = L : 2, H : 1)

* `function5(countOnly)`: Returns an object that, after counting all strings inputted, counts the total amount of appearances of a parameter(s) set by the user.

* `function5(eqArrays)`: Returns a message that, using the assertEqual function, will console.log whether two Arrays are identical or not.

* `function6(eqObjects)`: Returns a message that will console.log whether two Objects are identical or not, regardless of order of key:value pairs.

* `function7(findKey)`: This function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

* `function8(findKeyByValue)`: This function takes in an object and a value, scanning the object and returning the key which contains the given value. If there is no matching key, it will return undefined.

* `function9(head)`: This function scans an array and returns only the first value of said array.

* `function10(index)`: 