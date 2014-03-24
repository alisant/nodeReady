var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, contents) {
  if (err) {
    throw err;
  }

  var lines = contents.split('\n');
  var counts = lines.map(function (line) {
    return line.length;
  });

  console.log(JSON.stringify(counts));
});
