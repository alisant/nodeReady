var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , recorder      = require('workshopper-recorder')
  , boilerplate   = require('workshopper-boilerplate')
  , wrappedexec   = require('workshopper-wrappedexec')

  , testString    = JSON.stringify(
                      'The Object.keys() method returns an array of a given object\'s own enumerable properties'
                      .split(' ')
                      .reduce(function (p, c, i) {
                        p['el' + i] = c
                        return p
                      }, {})
                    )


exercise = filecheck(exercise)
exercise = recorder(exercise)
exercise = execute(exercise)
exercise = comparestdout(exercise)
exercise = boilerplate(exercise)
exercise = wrappedexec(exercise)

exercise.addBoilerplate(require.resolve('./boilerplate/objectkeys.js'))

exercise.wrapModule(require.resolve('./wrap'))

exercise.addSetup(function (mode, callback) {
  // first arg to child processes
  this.submissionArgs.unshift(testString)
  this.solutionArgs.unshift(testString)
  process.nextTick(callback)
})

exercise.addVerifyProcessor(function (callback) {
  this.emit(exercise.wrapData.usedObjectKeys ? 'pass' : 'fail', 'Used Object.keys()')
  callback(null, exercise.wrapData.usedObjectKeys)
})

module.exports = exercise