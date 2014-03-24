var data = process.argv.slice(2);
var average;
var stdev;

// convert args to numbers
data = data.map(function (x) {
  return Number(x);
});

// calculate average
average = data.reduce(function (total, x) {
  return total + x;
}, 0) / data.length;

// calculate stdev
stdev = Math.sqrt(data.reduce(function (total, x) {
  return total + Math.pow(x - average, 2);
}, 0) / data.length);

// filter inputs to those within +/- stdev of average
data = data.filter(function (x) {
  return Math.abs(x - average) <= stdev;
});

// print output
console.log(JSON.stringify(data));
