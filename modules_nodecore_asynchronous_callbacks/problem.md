----------------------------------------------------------------------

## Task

Use `fs.readFile()` to read a text file and calculate the length of each line. Print the line lengths to stdout as a JSON-encoded array. The path to the text file will be passed as the first argument to the program.

----------------------------------------------------------------------

## Description

This exercise requires you to write a program that performs the same task as the previous exercise, except now you must use an *asynchronous* method from Node-core. Asynchronous I/O is (almost) always preferable in Node.js applications but can be a difficult paradigm to adjust to.

Your program will accept a single command-line argument referring to a text file. The program should read the contents of the file and calculate the number of characters on each line.

The resulting array is then encoded as JSON and printed to stdout.

## Example

  $ node program.js /path/to/file.txt
  [78,50,68,70,71,69,55,56]

## Conditions

* Your program *must not* use any `*Sync()` methods from the **fs** module.
* Your program should use `fs.readFile()`. 

----------------------------------------------------------------------

## Hints

* `fs.readFile()` *does not* return the result of the file read. Instead, you supply a callback function which is invoked with the results when it is ready and the node process is not busy. 
* The callback to `fs.readFile()` will be called *asynchronously*, i.e. at some indeterminate point in the future.
* Callbacks in Node.js (almost) always follow the convention of propagating errors in asynchronous task by passing any errors as the first argument to their callback:

```js
  function (err, data) {
    // `err` will be an Error object if an error occurred
    // or `null` otherwise

    // `data` will contain the results of the call if there
    // was not an error
  }
```
