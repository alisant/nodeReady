----------------------------------------------------------------------

## Task

Replace the single `for` loop in *{boilerplate:filter.js}* with `Array#filter()` and other ES5 Array methods, while maintaining the original functionality.

----------------------------------------------------------------------

## Description

You will find a Node.js program file named *{boilerplate:filter.js}* in your current working directory. Execute the program with `node {boilerplate:filter.js}`.

*{boilerplate:filter.js}* takes an arbitrary number of command-line arguments where each argument is an integer. The program then calculates the average and standard deviation of these numbers and creates an array containing only those values that are within the standard deviation from the average (+/-).

The resulting array is then encoded as JSON and printed to stdout.

## Example

  $ node {boilerplate:filter.js} 2 4 4 4 5 5 7 9
  [4,4,4,5,5,7]

## Conditions

* Your submission will be judged for correct output and the use of `Array#filter()`.
* Warning: Any use of `for`, `while` or `do...while` will constitute a failure!

----------------------------------------------------------------------

## Hints

* You may also need to use some of the other ES5 methods already introduced by *{appname}*.
