var fs = require('fs');
var filepath = process.argv[2];

var txtcontents = fs.readFileSync(filepath, 'utf8');
var lines = txtcontents.split('\n');
var charactercounts = lines.map(function (line) {
  return line.length;
});

console.log(JSON.stringify(charactercounts));