----------------------------------------------------------------------

## Task

You've been supplied with a 'diceroll' implementation. It provides a random integer between 1 and 6. Write a program that accepts a total number of dicerolls to perform as an argument, and uses the *{boilerplate:diceroll.js}* as a local module to perform them, printing out each roll as "Rolled a X" to the console.

----------------------------------------------------------------------

## Description

You will find a Node.js module file named *{boilerplate:diceroll.js}* in your current working directory. Use and modify this file as part of your solution. Your main program should `require('./{boilerplate:diceroll.js}')` to use this module.

This exercise will further develop your understanding of the require mechanism in node.

Write a program which accepts a number, `total`, as an argument and invokes the diceroll module `total` number of times, printing a line to stdout, each time it is invoked. Each line should start with "Rolled a " followed by the number which was rolled as per the example below. Warning: The provided diceroll implementation appears to be broken and may need to be fixed! Make sure you use the simplest diceroll API possible.


## Example

  $ node program.js 3
  Rolled a 4
  Rolled a 6
  Rolled a 1

  $ node program.js 2
  Rolled a 1
  Rolled a 3

## Conditions

* The *{boilerplate:diceroll.js}* file must be required by your submitted program file.
* An overly complicated diceroll api will constitute a failure.

----------------------------------------------------------------------

# Hints

* The value of `module.exports` after running the file exactly once is cached as the value returned from calling require('mymodule').
