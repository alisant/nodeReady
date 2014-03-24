var fs = require('fs');

var contents = fs.readFileSync(process.argv[2], 'utf8');
var lines = contents.split('\n');
var counts = lines.map(function (line) {
  return line.length;
});

console.log(JSON.stringify(counts));