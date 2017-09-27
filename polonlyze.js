#!/usr/bin/env node

const program       = require('commander')

const appConstants  = require('./appConstants')
const polonlyzeCore = require('./polonlyzeCore')

program
  .version('0.1.1')
  .option('-k, --keyFile <value>', 'A file that contains the API key info.  Default='+appConstants.KEY_FILE_DEFAULT)


  .option('-e, --exchange', 'Exchange. Default='+appConstants.EXCHANGE_DEFAULT)
  .option('-l, --lending',  'Lending.  Default='+appConstants.LENDING_DEFULT)
  .option('-m, --margin',   'Margin.   Default='+appConstants.MARGIN_DEFAULT)

  .option('-o, --nonceOffset <value>', 'Nonce Offset. Default='+appConstants.NONCE_OFFSET_DEFAULT)
  .option('-t, --startDatetime <value>', 'Starting Datetime. Default='+appConstants.START_DATETIME_DEFULT)
  .option('-u, --stopDatetime <value>',  'Ending Datetime. Default='+appConstants.STOP_DATETIME_DEFAULT)

  .parse(process.argv)

const main = async () => {
  const result = await polonlyzeCore({
    exchange:program.exchange || appConstants.EXCHANGE_DEFAULT,
    keyFile:program.keyFile   || appConstants.KEY_FILE_DEFAULT,
    lending:program.lending   || appConstants.LENDING_DEFULT,
    margin:program.margin     || appConstants.MARGIN_DEFAULT,
    nonceOffset:program.nonceOffset     || appConstants.NONCE_OFFSET_DEFAULT,
    startDatetime:program.startDatetime || appConstants.START_DATETIME_DEFULT,
    stopDatetime:program.stopDatetime   || appConstants.STOP_DATETIME_DEFAULT
  })
  console.log(result)
}

main()
