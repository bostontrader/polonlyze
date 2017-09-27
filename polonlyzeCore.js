const fs       = require('fs')
const Poloniex = require('poloniex.js')

const appConstants = require('./appConstants')

const readKeyFiles = async (keyFile) => {
  return new Promise( (resolve, reject) => {
    fs.readFile(keyFile, 'utf8', function(err, data) {
      if(err) throw err
      resolve(data)
    })
  })
}

const polonlyzeCore = async ({
  exchange = appConstants.EXCHANGE_DEFAULT,
  keyFile  = appConstants.KEY_FILE_DEFAULT,
  lending  = appConstants.LENDING_DEFULT,
  margin   = appConstants.MARGIN_DEFAULT,
  nonceOffset = appConstants.NONCE_OFFSET_DEFAULT,
  startDatetime = appConstants.START_DATETIME_DEFULT,
  stopDatetime  = appConstants.STOP_DATETIME_DEFAULT
}) => {




  let retVal = {}
  const keys = await readKeyFiles(keyFile)

  if(exchange) {
    retVal.exchange = {}
    //const depositsWithdrawals = await returnDepositsWithdrawals(poloniexPrivate, startDt, stopDt)
    //const txsDepositsWithdrawals = digestDepositsWithdrawals(depositsWithdrawals)

    //const tradeHistory = await returnTradeHistory(poloniexPrivate, startDt, stopDt)
    //const txsTradeHistory = digestTradeHistory(tradeHistory)
  }
  return retVal
}

module.exports = polonlyzeCore
