----------------------------------------------------------------------

## Task

Replace the `for` loop in *{boilerplate:reduce.js}* with an ES5 `Array#reduce()` loop while maintaining the original functionality.

----------------------------------------------------------------------

## Description

You will find a Node.js program file named *{boilerplate:reduce.js}* in your current working directory. Execute the program with `node {boilerplate:reduce.js}`.

This Node.js program builds upon the Array#map() exercise but this time it takes an arbitrary number of command-line arguments and calculates the cumulative string length of the arguments passed to the program.

The resulting array is then encoded as JSON and printed to stdout.

## Example

  $ node {boilerplate:reduce.js} one two three four
  15

## Conditions

* Your submission will be judged for correct output and the use of `Array#reduce()`.
* Warning: Any use of `for`, `while` or `do...while` will constitute a failure!

----------------------------------------------------------------------
