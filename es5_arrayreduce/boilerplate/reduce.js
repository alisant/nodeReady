// sanity check command-line arguments
if (process.argv.length == 2) {
  return console.log('Please provide a list of strings');
}

// Array#slice() returns a new array starting from the
// specified index, so we can trim argv to just the
// additional arguments
var strings = process.argv.slice(2);

var totalLength = 0;

// populate the lengths array with the length of each string
/*
for (var i = 0; i < strings.length; i++) {
  totalLength += strings[i].length;
}
*/

var totalLength = strings.reduce(function(total, string){
	return total + string.length;
}, 0)

console.log(totalLength);