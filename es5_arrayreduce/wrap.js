function wrap (ctx) {
  var reduce = Array.prototype.reduce

  ctx.usedReduce = false

  Array.prototype.reduce = function () {

    // $captureStack is a utility to capture a stacktrace array
    var stack = ctx.$captureStack(Array.prototype.reduce)

    // inspect the first callsite of the stacktrace and see if the
    // filename matches the mainProgram we're running, if so, then
    // the user has used Array#reduce!
    // the substring() is necessary as the user doesn't have to provide
    // a .js extension to make it work

    if (stack[0].getFileName().substring(0, ctx.mainProgram.length) == ctx.mainProgram)
      ctx.usedReduce = true

    // call the real Array#reduce

    return reduce.apply(this, arguments)
  }
}


module.exports = wrap