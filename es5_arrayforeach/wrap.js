function wrap (ctx) {
  var forEach = Array.prototype.forEach

  ctx.usedForEach = false

  Array.prototype.forEach = function () {

    // $captureStack is a utility to capture a stacktrace array
    var stack = ctx.$captureStack(Array.prototype.forEach)

    // inspect the first callsite of the stacktrace and see if the
    // filename matches the mainProgram we're running, if so, then
    // the user has used Array#forEach!
    // the substring() is necessary as the user doesn't have to provide
    // a .js extension to make it work

    if (stack[0].getFileName().substring(0, ctx.mainProgram.length) == ctx.mainProgram)
      ctx.usedForEach = true

    // call the real Array#forEach

    return forEach.apply(this, arguments)
  }
}


module.exports = wrap