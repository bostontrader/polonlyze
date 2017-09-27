const fs       = require('fs')
const Poloniex = require('poloniex.js')

const appConstants = require('./appConstants')

const polonlyzeCore = async ({
  exchange = appConstants.EXCHANGE_DEFAULT,
  keyFile  = appConstants.KEY_FILE_DEFAULT,
  lending  = appConstants.LENDING_DEFULT,
  margin   = appConstants.MARGIN_DEFAULT,
  nonceOffset = appConstants.NONCE_OFFSET_DEFAULT,
  startDatetime = appConstants.START_DATETIME_DEFULT,
  stopDatetime  = appConstants.STOP_DATETIME_DEFAULT
}) => {

  const readKeyFiles = async (keyFile) => {
    return new Promise( (resolve, reject) => {
      fs.readFile('keys.js', 'utf8', function(err, data) {
        if(err) throw err
        resolve(data)
      })
    })
  }

  let retVal = {}
  const keys = await readKeyFiles(keyFile)

  if(exchange) {
    retVal.exchange = {}
  }
  return retVal
}

module.exports = polonlyzeCore
