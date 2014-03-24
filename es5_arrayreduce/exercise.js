var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , recorder      = require('workshopper-recorder')
  , boilerplate   = require('workshopper-boilerplate')
  , wrappedexec   = require('workshopper-wrappedexec')

  , testArgs      = 'The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value.'.split(' ')


exercise = filecheck(exercise)
exercise = recorder(exercise)
exercise = execute(exercise)
exercise = comparestdout(exercise)
exercise = boilerplate(exercise)
exercise = wrappedexec(exercise)

exercise.addBoilerplate(require.resolve('./boilerplate/reduce.js'))

exercise.wrapModule(require.resolve('./wrap'))

exercise.addSetup(function (mode, callback) {
  // first arg to child processes
  this.submissionArgs = testArgs.concat(this.submissionArgs)
  this.solutionArgs = testArgs.concat(this.solutionArgs)
  process.nextTick(callback)
})

exercise.addVerifyProcessor(function (callback) {
  this.emit(exercise.wrapData.usedReduce ? 'pass' : 'fail', 'Used Array#reduce()')
  callback(null, exercise.wrapData.usedReduce)
})

module.exports = exercise