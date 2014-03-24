function wrap (ctx) {
  var keys = Object.keys

  ctx.usedObjectKeys = false

  Object.keys = function () {

    // $captureStack is a utility to capture a stacktrace array
    var stack = ctx.$captureStack(Object.keys)

    // inspect the first callsite of the stacktrace and see if the
    // filename matches the mainProgram we're running, if so, then
    // the user has used Object.keys!
    // the substring() is necessary as the user doesn't have to provide
    // a .js extension to make it work

    if (stack[0].getFileName().substring(0, ctx.mainProgram.length) == ctx.mainProgram)
      ctx.usedObjectKeys = true

    // call the real Object.keys

    return keys.apply(null, arguments)
  }
}


module.exports = wrap