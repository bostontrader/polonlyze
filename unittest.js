const test = require('ava')
const polonlyzeCore = require('./polonlyzeCore')

// Given no inputs, what is the default behavior?
// No action requested, so no key file is required, so no errors returned
test(t => {t.deepEqual([], polonlyzeCore({}))})

// Analyse just the exchange sub-account
test(t => {t.deepEqual([], polonlyzeCore({exchange:true}))})

test(t => {
  t.deepEqual([1, 2], [1, 2])
})
