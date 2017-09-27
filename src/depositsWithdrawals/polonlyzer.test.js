const test = require('ava')

const polonlyze = require('./polonlyzer')

// 1. Test the basic iteration over the input and the subsequent length of the output

// 1.1 For deposits...
// Given an object with zero deposits, return an empty array of transactions.
test(async t => {
  t.deepEqual([],await polonlyze({deposits:[], withdrawals:[]}))
})

// Given an object with one deposit, return an array of only one transaction.
test(async t => {
  const r = await polonlyze({deposits:[{}], withdrawals:[]})
  t.is(1, r.length)
})

// Given an object with two deposits, return an array of two transactions.
test(async t => {
  const r = await polonlyze({deposits:[{},{}], withdrawals:[]})
  t.is(2, r.length)
})

// 1.2 For withdrawals...
// Given an object with zero withdrawals, return an empty array of transactions.
test(async t => {
  t.deepEqual([],await polonlyze({withdrawals:[], deposits:[]}))
})

// Given an object with one withdrawal, return an array of only one transaction.
test(async t => {
  const r = await polonlyze({withdrawals:[{}], deposits:[]})
  t.is(1, r.length)
})

// Given an object with two withdrawals, return an array of two transactions.
test(async t => {
  const r = await polonlyze({withdrawals:[{},{}], deposits:[]})
  t.is(2, r.length)
})

// 2. A complete deposit object should yield a correct transaction
test(async t => {

  const actual = await polonlyze({deposits:[{ currency: 'BTC',
    amount: '5000.00000000',
    timestamp: 1502006409
  }], withdrawals:[]})

  const expected = [{
    dist:[
      {acct:{type:'a', cur:'BTC', desc:'balance'},amt:5000},
      {acct:{type:'eq', cur:'BTC', desc:'capital'},amt:-5000}],
    timestamp:1502006409
  }]

  t.deepEqual(expected, actual)
})

// 3. A complete withdrawal object should yield a correct transaction.
// Warning! This omits the fees. If you withdraw money then capital and balance change the same amount.  Fees are paid by the recipient.
test(async t => {

  const actual = await polonlyze({withdrawals:[{ currency: 'BTC',
    amount: '5000.00000000',
    timestamp: 1502006409
  }], deposits:[]})

  const expected = [{
    dist:[
      {acct:{type:'eq', cur:'BTC', desc:'capital'},amt:5000},
      {acct:{type:'a', cur:'BTC', desc:'balance'},amt:-5000}
      ],
    timestamp:1502006409
  }]

  t.deepEqual(expected, actual)
})
