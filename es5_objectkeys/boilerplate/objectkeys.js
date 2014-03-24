// sanity check command-line arguments
if (process.argv.length == 2) {
  return console.log('Please provide a JSON-encoded object');
}

// de-serialize the JSON object passed as
// the first command-line argument
var obj = JSON.parse(process.argv[2]);

// log a line for each key/value pair of the object
/*
for (var key in obj) {
  console.log("%s=%s", key, obj[key]);
}
*/

Object.keys(obj).forEach(function(key){
	console.log("%s=%s", key, obj[key]);
});