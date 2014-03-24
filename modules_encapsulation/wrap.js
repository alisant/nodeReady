function wrap (ctx) {
  // use seed to sync solution and submission
  Math.random = require('seedable-random')
  Math.random.seed(ctx.seed)
}

module.exports = wrap

// opt in to wrapping solution for seed sync purposes
module.exports.wrapSolution = true
