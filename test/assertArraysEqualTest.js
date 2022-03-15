const assertArraysEqual = require('../assertArraysEqual')

//TEST CODE
assertArraysEqual(["Havlicek", 16, 17], ["Havlicek", 16, 17]);//--> true
assertArraysEqual(["Pierce", 15, 34], ["Pierce", 15, 33]);//--> false