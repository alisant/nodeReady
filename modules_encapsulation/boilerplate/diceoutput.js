var randMod = require('./diceroll');
var numOfTime = parseInt(process.argv[2], 10);

for (var time = 1; time <= numOfTime; time++){
	console.log('Rolled a %d', randMod());
}