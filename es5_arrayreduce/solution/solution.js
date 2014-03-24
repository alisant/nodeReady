var strings = process.argv.slice(2);
var totalLength = strings.reduce(function (total, string) {
  return total + string.length;
}, 0);
console.log(totalLength);