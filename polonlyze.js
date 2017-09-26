#!/usr/bin/env node

const program       = require('commander')
const polonlyzeCore = require('./polonlyzeCore')

const exchangeDefault      = false
const keyFileDefault       = 'keys.js'
const lendingDefault       = false
const marginDefault        = false
const nonceOffsetDefault   = 0
const startDatetimeDefault = 0
const stopDatetimeDefault  = Date.now()

program
  .version('0.1.1')
  .option('-k, --keyFile <value>', 'A file that contains the API key info.  Default='+keyFileDefault)


  .option('-e, --exchange', 'Exchange. Default='+exchangeDefault)
  .option('-l, --lending',  'Lending.  Default='+lendingDefault)
  .option('-m, --margin',   'Margin.   Default='+marginDefault)

  .option('-o, --nonceOffset <value>', 'Nonce Offset. Default='+nonceOffsetDefault)
  .option('-t, --startDatetime <value>', 'Starting Datetime. Default=from the beginning of time.')
  .option('-u, --stopDatetime <value>',  'Ending Datetime. Default=Right now.')

  .parse(process.argv)

const main = async () => {
  const result = await polonlyzeCore({
    exchange:program.exchange || exchangeDefault,
    keyFile:program.keyFile   || keyFileDefault,
    lending:program.lending   || lendingDefault,
    margin:program.margin     || marginDefault,
    nonceOffset:program.nonceOffset     || nonceOffsetDefault,
    startDatetime:program.startDatetime || startDatetimeDefault,
    stopDatetime:program.stopDatetime   || stopDatetimeDefault
  })
  console.log(result)
}

main()