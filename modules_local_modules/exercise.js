var exercise      = require('workshopper-exercise')()
  , execute       = require('workshopper-exercise/execute')
  , wrappedexec   = require('workshopper-wrappedexec')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , path          = require('path')

var EXPECTED_REQUIRES = 1

exercise = execute(exercise)
exercise = comparestdout(exercise)
exercise = wrappedexec(exercise)

exercise.wrapModule(require.resolve('./wrap'))

exercise.addSetup(function (mode, callback) {
  var randInt = Math.floor(Math.random() * 100)
  this.submissionArgs.unshift(randInt)
  this.solutionArgs.unshift(randInt)

  process.nextTick(callback)
})

exercise.addVerifyProcessor(function (callback) {
  var required = getRequiredModules(exercise)
  var pass = required.length === EXPECTED_REQUIRES
  var submissionModule = required.length && require(required[0])
  var solutionModule = require('./solution/pi')

  this.emit(
      pass ? 'pass' : 'fail'
    , 'Needs to require a module.'
  )

  if (!pass)
    return callback(null, false)

  for (var i = 0; i < 10; i++) {
    var random = Math.random() * 100
    if (solutionModule(random) !== submissionModule(random)) {
      pass = false
      break
    }
  }

  this.emit(
      pass ? 'pass' : 'fail'
    , 'Module must handle the multiplication by Math.PI'
  )

  callback(null, pass)
})

// Retrieve an array of all non-core modules required
// in the exercise. This excludes the initial setup
// modules (before) and the exercise itself (source).
function getRequiredModules (exercise) {
  var before = exercise.wrapData.requiresBefore
  var after  = exercise.wrapData.requiresAfter
  var source = path.resolve(exercise.args[0])

  var additions = after.filter(function (item) {
    return (
      item !== source &&
      before.indexOf(item) === -1
    )
  })

  return additions
}

module.exports = exercise
