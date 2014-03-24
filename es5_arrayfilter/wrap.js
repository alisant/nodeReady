function wrap (ctx) {
  var filter = Array.prototype.filter

  ctx.usedFilter = false

  Array.prototype.filter = function () {

    // $captureStack is a utility to capture a stacktrace array
    var stack = ctx.$captureStack(Array.prototype.filter)

    // inspect the first callsite of the stacktrace and see if the
    // filename matches the mainProgram we're running, if so, then
    // the user has used Array#filter!
    // the substring() is necessary as the user doesn't have to provide
    // a .js extension to make it work

    if (stack[0].getFileName().substring(0, ctx.mainProgram.length) == ctx.mainProgram)
      ctx.usedFilter = true

    // call the real Array#filter

    return filter.apply(this, arguments)
  }
}


module.exports = wrap