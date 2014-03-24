var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , recorder      = require('workshopper-recorder')
  , boilerplate   = require('workshopper-boilerplate')
  , wrappedexec   = require('workshopper-wrappedexec')

  , testString    = 'forEach executes the provided callback once for each element of the array with an assigned value.'
                      .replace(/\s/g, ',')


exercise = filecheck(exercise)
exercise = recorder(exercise)
exercise = execute(exercise)
exercise = comparestdout(exercise)
exercise = boilerplate(exercise)
exercise = wrappedexec(exercise)

exercise.addBoilerplate(require.resolve('./boilerplate/foreach.js'))

exercise.wrapModule(require.resolve('./wrap'))

exercise.addSetup(function (mode, callback) {
  // first arg to child processes
  this.submissionArgs.unshift(testString)
  this.solutionArgs.unshift(testString)
  process.nextTick(callback)
})

exercise.addVerifyProcessor(function (callback) {
  this.emit(exercise.wrapData.usedForEach ? 'pass' : 'fail', 'Used Array#forEach()')
  callback(null, exercise.wrapData.usedForEach)
})

module.exports = exercise