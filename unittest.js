const test = require('ava')
const polonlyzeCore = require('./polonlyzeCore')

// Run the tests inside this function because we can only await from inside async functions
const main = async () => {
  // Given no inputs, what is the default behavior?
  const n1 = await polonlyzeCore({})
  test(t => {t.deepEqual({}, n1)})

  // Analyse just the exchange sub-account
  const n2 = await polonlyzeCore({exchange:true})
  test(t => {t.deepEqual({exchange:{}}, n2)})
}

main()
