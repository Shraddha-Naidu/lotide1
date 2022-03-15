const assertEqual = require('../assertEqual')
const tail = require('../tail')

//TEST CODE
const playerName = ["Garnett", "Bird", "Smart", "Tatum"];
tail(playerName);//Calls tail function
assertEqual(tail(playerName.length, 3));//assertEqual can't check if two arrays are the same so checking if output is equal to remaining element(.length)
assertEqual(playerName[0], "Garnett");//Checks thath the right elements are being modified
assertEqual(playerName[1], "Bird");
assertEqual(playerName[2], "Smart");
assertEqual(playerName[3], "Tatum");