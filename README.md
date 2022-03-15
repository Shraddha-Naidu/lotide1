# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @naidu.shraddha/lotide1`

**Require it:**

`const _ = require('@naidu.shraddha/lotide1');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: if arrays are equal, returns true
* `assertEqual`: if two values are equal, returns true
* `assertObjectsEqual`: if two objects are eqaul, returns true
* `countLetters`: counts letters and individual occurrences in a string
* `countOnly`: counts occurences of items within an object with a list
* `eqArrays`: compares two arrays
* `eqObjects`: compares two objects
* `findKey`: identifies a key for which the callback returns true
* `findKeyByValue`: indentifies a key in an object based on a given parameter
* `head`: returns first element in an array
* `letterPositions`: returns with index postions of each character within a string
* `map`: creates a new array by transforming each individual element in an excisting array by calling a provided function
* `middle`: returns element that is in the middle of the array
* `tail`: returns every element within an array except for the head(first)
* `takeUntil`: returns portion of an array
* `without`: removes elements from an array
