var exercise      = require('workshopper-exercise')()
  , boilerplate   = require('workshopper-boilerplate')
  , execute       = require('workshopper-exercise/execute')
  , wrappedexec   = require('workshopper-wrappedexec')
  , comparestdout = require('workshopper-exercise/comparestdout')

exercise = execute(exercise)
exercise = comparestdout(exercise)
exercise = boilerplate(exercise)
exercise = wrappedexec(exercise)

// pass seed to wrap for syncing solution and submission
exercise.wrapSet('seed', Date.now())

exercise.wrapModule(require.resolve('./wrap'))
exercise.addBoilerplate(require.resolve('./boilerplate/diceroll.js'))

exercise.addSetup(function (mode, callback) {
  // do between 4 - 24 rolls (arbitrary)
  var randNum = Math.floor(Math.random() * 20) + 5
  this.submissionArgs.push(randNum)
  this.solutionArgs.push(randNum)
  callback()
})

// TODO: verify their diceroll implementation is a single export
// TODO: Consider forcing them to not use any built-in loop constructs!
// i.e. force them to use recursion or some other trickery
// goal being to get them to think about what iteration means.

module.exports = exercise
