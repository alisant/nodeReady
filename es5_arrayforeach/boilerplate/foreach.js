// sanity check command-line arguments
if (process.argv.length == 2) {
  return console.log('Please provide a string to split');
}

// this creates an array of words by splitting
// the first command-line argument on ' '

//var data = process.argv[2].split(',');

//for (var i = 0; i < data.length; i++) {

  // uses console.log() like a printf() with
  // %s string substitution for trailing args
//  console.log('[%s] %s', i, data[i]);

//}


process.argv[2].split(',').forEach(function (element, index) {
  console.log('[%s] %s', index, element);
});