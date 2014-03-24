var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , recorder      = require('workshopper-recorder')
  , boilerplate   = require('workshopper-boilerplate')
  , wrappedexec   = require('workshopper-wrappedexec')

  , testData      = Array.apply(null, new Array(20)).map(function () {
                      return String(Math.round(Math.random() * 100))
                    })

exercise.longCompareOutput = true

exercise = filecheck(exercise)
exercise = recorder(exercise)
exercise = execute(exercise)
exercise = comparestdout(exercise)
exercise = boilerplate(exercise)
exercise = wrappedexec(exercise)

exercise.addBoilerplate(require.resolve('./boilerplate/filter.js'))

exercise.wrapModule(require.resolve('./wrap'))

exercise.addPrepare(function (callback) {
  callback()
})

exercise.addSetup(function (mode, callback) {
  // first arg to child processes
  this.submissionArgs = testData.concat(this.submissionArgs)
  this.solutionArgs = testData.concat(this.solutionArgs)
  process.nextTick(callback)
})

exercise.addVerifyProcessor(function (callback) {
  this.emit(exercise.wrapData.usedFilter ? 'pass' : 'fail', 'Used Array#filter()')
  callback(null, exercise.wrapData.usedFilter)
})

module.exports = exercise