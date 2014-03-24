module.exports = function(ctx) {
  ctx.requiresBefore = Object.keys(require.cache)
}

function finish (ctx) {
  ctx.requiresAfter = Object.keys(require.cache)
}

module.exports.finish = finish
module.exports.wrapSolution = true
module.exports.wrapSubmission = true
