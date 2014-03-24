var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , recorder      = require('workshopper-recorder')


exercise = filecheck(exercise)
exercise = recorder(exercise)
exercise = execute(exercise)
exercise = comparestdout(exercise)


module.exports = exercise
