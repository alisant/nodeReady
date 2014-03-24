var diceroll = require('./diceroll');
var rolls = parseInt(process.argv[2], 10);

for (var i = 1; i <= rolls; i++) {
  console.log('Rolled a %d', diceroll());
}
