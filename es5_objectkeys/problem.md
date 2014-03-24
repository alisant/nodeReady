----------------------------------------------------------------------

## Task

Replace the `for...in` loop in *{boilerplate:objectkeys.js}* with an ES5 loop around `Object.keys()` while maintaining the original functionality.

----------------------------------------------------------------------

## Description

You will find a Node.js program file named *{boilerplate:objectkeys.js}* in your current working directory. Execute the program with `node {boilerplate:objectkeys.js}`.

This program will accept a JSON-encoded object as its first command-line argument. The object is decoded and a `for...in` loop is used to print a line for each property belonging to the object to stdout. Each line of output contains a single key-value pair in the format: **key=value**, where *"key"* is the property key and *"value"* is the property value.

## Example

  $ node {boilerplate:objectkeys.js} '{"key1":"value1","key2":"value2"}'
  key1=value1
  key2=value2

## Conditions

* Your submission will be judged for correct output and the use of `Object.keys()`.
* Warning: Any use of `for`, `while` or `do...while` will constitute a failure!

----------------------------------------------------------------------
