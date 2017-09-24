#!/usr/bin/env node

const program = require('commander')
const poloAPI = require('poloniex.js')

program
  .version('0.1.1')
  .option('-e, --exchange', 'Exchange')
  .option('-l, --lending',  'Lending')
  .option('-m, --margin',   'Margin')

  .option('-k, --apiKey <value>',      'API Key')
  .option('-s, --secret <value>',      'Secret')
  .option('-o, --nonceOffset <value>', 'Nonce Offset')

  .parse(process.argv)

console.log('Polonlyze ')

const poloPrivate = new poloAPI(program.apiKey, program.secret, program.nonceOffset)

if (program.exchange) console.log('  - exchange')
if (program.lending) console.log('  - lending')
if (program.margin) console.log('  - margin')
