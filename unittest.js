const test = require('ava')
const polonlyzeCore = require('./polonlyzeCore')

test(async t => {
  // Given no inputs, what is the default behavior?
  t.deepEqual({}, await polonlyzeCore({}))
})

test(async t => {
  // Polonlyze just the exchange sub-account
  t.deepEqual({exchange:{}}, await polonlyzeCore({exchange:true}))
})
