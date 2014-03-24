var fs            = require('fs')
  , path          = require('path')
  , os            = require('os')
  , exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , recorder      = require('workshopper-recorder')
  , wrappedexec   = require('workshopper-wrappedexec')

  , testDataFile  = path.join(__dirname, '../modules_nodecore/fs.md')
  , testFile      = path.join(os.tmpDir(), '_nodeready_' + process.pid + '.txt')


exercise.longCompareOutput = true

exercise = filecheck(exercise)
exercise = recorder(exercise)
exercise = execute(exercise)
exercise = comparestdout(exercise)
exercise = wrappedexec(exercise)

exercise.wrapModule(require.resolve('../modules_nodecore/wrap'))

exercise.addSetup(function (mode, callback) {
  this.submissionArgs.unshift(testFile)
  this.solutionArgs.unshift(testFile)

  fs.readFile(testDataFile, 'utf8', function (err, data) {
    if (err)
      return callback(err)

    data = data.split('\n')
    var start = Math.max(0, Math.floor(Math.random() * data.length - 10))
    data = data.slice(start, start + 10)

    fs.writeFile(testFile, data.join('\n'), callback)
  })
})

exercise.addVerifyProcessor(function (callback) {
  var usedSync  = false
    , usedAsync = false

  Object.keys(exercise.wrapData.fsCalls).forEach(function (m) {
    if (/Sync$/.test(m)) {
      usedSync = true
      this.emit('fail', 'Used synchronous method: fs.' + m + '()')
    } else {
      usedAsync = true
      this.emit('pass', 'Used asynchronous method: fs.' + m + '()')
    }
  }.bind(this))

  callback(null, usedAsync && !usedSync)
})

exercise.addVerifyCleanup(function (callback) {
  fs.unlink(testFile, callback)
})

module.exports = exercise