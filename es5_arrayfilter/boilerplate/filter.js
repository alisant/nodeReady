// sanity check command-line arguments
if (process.argv.length == 2) {
  return console.log('Please provide a list of numbers');
}
/*
var input = process.argv.slice(2)
var output = [];
var total = 0;
var average;
var stdev;
var i;

for (i = 0; i < input.length; i++) {
  // convert the argument from a String to a Number type
  input[i] = Number(input[i]);

  // update total for average calculation
  total += input[i];
}

average = total / input.length;

total = 0; // reuse this variable

for (i = 0; i < input.length; i++) {
  total += Math.pow(input[i] - average, 2);
}

stdev = Math.sqrt(total / input.length);

for (i = 0; i < input.length; i++) {
  // collect only values within +/- 20 of the average
  if (Math.abs(input[i] - average) <= stdev) {
    output.push(input[i]);
  }
}

// print a JSON-encoded string version of the output array
console.log(JSON.stringify(output));
*/

var input = process.argv.slice(2);
var total;
var average;
var stdev;

// convert args to numbers
input = input.map(function (x) {
  return Number(x);
});

// calcaulate total
total = input.reduce(function(total, x){
  return total + x;
},0);

// calculate average
average = total / input.length;

total = 0;

total = input.reduce(function (total, x) {
  return total + Math.pow(x - average, 2);
}, 0);

// calculate stdev
stdev = Math.sqrt(total / input.length);

// filter inputs to those within +/- stdev of average
input = input.filter(function (x) {
  return Math.abs(x - average) <= stdev;
});

// print output
console.log(JSON.stringify(input));
