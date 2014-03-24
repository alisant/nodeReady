var fs = require('fs');
var filepath = process.argv[2];

fs.readFile(filepath, 'utf8', function(err, data){
	if (err) {
    	throw err;
 	}
	var lines = data.split('\n');
  	var charactercounts = lines.map(function (line) {
    	return line.length;
 	});
	console.log(JSON.stringify(charactercounts));
});

